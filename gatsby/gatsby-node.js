import path from 'path';
import fetch from 'isomorphic-fetch';

async function turnTartsIntoPages({ graphql, actions }) {
  // 1. Get a template for this page
  const tartTemplate = path.resolve('./src/templates/Tarts.js');
  // 2. Query all pizzas
  const { data } = await graphql(`
    query {
      tarts: allSanityPoptarts {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);

  // 3. Loop over each pizza and create a page for that pizza
  data.tarts.nodes.forEach((tart) => {

    actions.createPage({
      // What is the URL for this new page??
      path: `poptart/${tart.slug.current}`,
      component: tartTemplate,
      context: {
        slug: tart.slug.current,
      },
    });
  });
}

async function turnFrostingsIntoPages({ graphql, actions }) { 
    const frostingTemplate = path.resolve('./src/pages/poptarts.js');
    
    const { data } = await graphql(`
      query {
        frostings: allSanityFrosting {
          nodes {
            name
            id
          }
        }
      }
    `);
    
     data.frostings.nodes.forEach((frosting) => {

       actions.createPage({
        // What is the URL for this new page??
        path: `frosting/${frosting.name}`,
        component: frostingTemplate,
        context: {
          frosting: frosting.name,
        },
      });
       });
}

async function fetchApiAndTurnIntoNodes ({actions: {createNode}, createNodeId, createContentDigest}) {
  const res = await fetch('https://openapi.etsy.com/v2/shops/17719303/listings/active?api_key=mi7nway2o9qr8m58l5o5d6am');
  const items = await res.json();
  
  async function getImage(id) {
    const res2 = await fetch(`https://openapi.etsy.com/v2/listings/${id}/images?api_key=mi7nway2o9qr8m58l5o5d6am`);
    const items = await res2.json();
    // Taking the main image from the first item in the array
    return await items.results[0].url_fullxfull;
  }

   items.results.map(async etsyItem => {

    const image = await getImage(etsyItem.listing_id);

    return createNode({
    ...etsyItem,
    id: createNodeId(`etsy-${etsyItem.listing_id}`),
    parent: null,
    // This is returning undefined
    image:  image,
    children: [],
    internal: {
      type: `etsyItem`,
      mediaType: 'application/json',
      contentDigest: createContentDigest(etsyItem)
    }    
  }); 
})
}



export async function sourceNodes(params) {
    await Promise.all([
      fetchApiAndTurnIntoNodes(params),
   
  ]);
}

export async function createPages(params) {
    await Promise.all([
         turnTartsIntoPages(params),
         turnFrostingsIntoPages(params),
    ]);
}

