const stripe = require('stripe')(process.env.GATSBY_STRIPE_API_SECRET);
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
            price: product.price,
            currency: product.currency,
           
        }));
        const line_items = validateCartItems(inventory, productJSON);

        // 

        line_items.forEach((item => {
            item.tax_rates=['txr_1IQ0lmCsU39bMzZTe9YDT5Rp']
        }))
     

        console.log(line_items);

       const session = await stripe.checkout.sessions.create({
           payment_method_types: ['card'],
           billing_address_collection: 'auto',
           shipping_address_collection: {
               allowed_countries: ['US']
           },
           shipping_rates: ['shr_1IQG4UCsU39bMzZTfj4q5vZz'],
           mode: 'payment',
            success_url: `http://localhost:8888/success`,
            cancel_url: `http://localhost:8888/cancelled`,
           line_items,
       });
       console
       return {
           statusCode: 200,
           body: JSON.stringify({sessionId: session.id})
       }
        
    } catch (error) {
        console.log({error})
    }
}
