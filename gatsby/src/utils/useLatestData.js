import { useState, useEffect } from 'react';
const gql = String.raw;
export default function useLatestData() {
  // hot slices
  const [featuredTarts, setfeaturedTarts] = useState();
  const [featuredImage, setFeaturedImage] = useState();
  // slicemasters
  // Use a side effect to fetcht he data from the graphql endpoint
  useEffect(function () {
    // when the component loads, fetch the data
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: gql`
            query {
                    StoreSettings(id: "Home")
                    {
                        featuredTarts {
                            name
                            _id
                            slug {
                                current
                              }
                            image {
                                asset {
                                    url 
                                        metadata {
                                            lqip
                                        }
                                    }
                                }
                            }
                             featuredImage {
                      asset {
                        url 
                        metadata {
                          lqip
                        }
                      }
                      }
                      }
                }
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setfeaturedTarts(res.data.StoreSettings.featuredTarts);
        setFeaturedImage(res.data.StoreSettings.featuredImage)

      });
  }, []);
  return {
    featuredTarts,
    featuredImage
  };
}