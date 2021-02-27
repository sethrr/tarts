import { useState, useEffect } from 'react';
const gql = String.raw;
export default function useLatestData() {
  // hot slices
  const [getAllTarts, setAllTarts] = useState();

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
                allPoptarts {
                  name
                  _id
                  image {
                    asset {
                      url
                    }
                  }
                  slug {
                    current
                  }
                  description
                  price
                  
                }
                }
                
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setAllTarts(res.data.allPoptarts)
      });
  }, []);
  return {
    getAllTarts
  };
}