const stripe = require('stripe')('sk_test_51IOPnECsU39bMzZTcbg2LaNr9EVjPLZBej9PPMLJnC083Frk3o78KHpWfjQSlMCLa4zF6ZwJWVmw2iQvNBg0cXSM002URcyPbX');
const validateCartItems = require('use-shopping-cart/src/serverUtil').validateCartItems;
const sanityClient = require('@sanity/client');
const client = sanityClient({
    projectId: process.env.GATSBY_SANITY_PROJECT_ID,
    dataset: process.env.GATSBY_SANITY_DATASET,
    useCdn: false // `false` if you want to ensure fresh data
});
const sanityQuery = '*[_type == "product"]'

exports.handler = async (event) => {
    try {
        // The cart contents
        const productJSON = JSON.parse(event.body);

        // Get the inventory from sanity to validate cart contents against
        const sanityProducts = await client.fetch(sanityQuery, {});

        // Clean up the sanity inventory to only have the stuff stripe cares about to check against
        const inventory = sanityProducts.map((product) => ({
            name: product.title,
            id: product.productId.current,
            sku: product.sku,
            price: product.price * 100,
            currency: product.currency
        }));
        const line_items = validateCartItems(inventory, productJSON);


       const session = await stripe.checkout.sessions.create({
           payment_method_types: ['card'],
           billing_address_collection: 'auto',
           shipping_address_collection: {
               allowed_countries: ['US', 'CA', 'GB']
           },
           mode: 'payment',
            success_url: `http://localhost:8888/success`,
            cancel_url: `http://localhost:8888/cancelled`,
           line_items,
       });

       console.log({session})

       return {
           statusCode: 200,
           body: JSON.stringify({sessionId: session.id})
       }
        
    } catch (error) {
        console.log({error})
    }
}