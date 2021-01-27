import path from 'path';

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

export async function createPages(params) {
    await Promise.all([
         turnTartsIntoPages(params),
         turnFrostingsIntoPages(params),
    ]);

}
