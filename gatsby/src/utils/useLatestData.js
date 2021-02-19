import { useState, useEffect } from 'react';
const gql = String.raw;
export default function useLatestData() {
  // hot slices
  const [featuredTarts, setfeaturedTarts] = useState();
  // slicemasters
  // Use a side effect to fetcht he data from the graphql endpoint
  useEffect(function () {
    console.log('fetching!');
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
                            image {
                                asset {
                                    url 
                                        metadata {
                                            lqip
                                        }
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
        console.log(res.data)
        setfeaturedTarts(res.data.StoreSettings.featuredTarts);

      });
  }, []);
  return {
    featuredTarts,
  };
}