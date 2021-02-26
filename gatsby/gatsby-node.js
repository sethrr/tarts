
import path from 'path';
import fetch from 'isomorphic-fetch';

async function turnTartsIntoPages({
  graphql,
  actions
}) {
  // 1. Get a template for this page
  const tartTemplate = path.resolve('./src/templates/Tarts.js');
  // 2. Query all pizzas
  const {
    data
  } = await graphql(`
    query {
      tarts: allSanityPoptarts {
        totalCount
        nodes {
          name
          slug {
            current
          }
          id
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

  const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
  const pageCount = Math.ceil(data.tarts.totalCount / pageSize);

  // 4. Loop from 1 to n and create the pages for them
  Array.from({ length: pageCount }).forEach((_, i) => {

    actions.createPage({
      path: `/tarts/${i + 1}`,
      component: path.resolve('./src/pages/poptarts.js'),
      // This data is pass to the template when we create it
      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
      },
    });
  });
}

async function turnFrostingsIntoPages({
  graphql,
  actions
}) {
  const frostingTemplate = path.resolve('./src/pages/poptarts.js');

  const {
    data
  } = await graphql(`
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

async function createProductPages(params) {
  const {createPage} = actions;
  const result = await graphql(`
  {
      allSanityProducts {
          nodes {
              id
              slug {
                  current
              }    
          }
        }
  }
  `);

  if (result.errors) throw result.errors;

  const products = (result.data.allSanityPoptarts || {}).nodes || [];
  products.forEach((node) => {
      const {id, slug = {}} = node;
      if (!slug) return;

      const path = `/product/${slug.current}`;
      createPage({
          path,
          component: require.resolve('./src/templates/product.js'),
          context: {id}
      })
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
     createProductPages(params)
  ]);


}