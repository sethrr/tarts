import { useEffect, useState } from 'react';


export default function useLatestData() {
    const [featuredTarts, setFeaturedTarts] = useState();
    useEffect(function() {
        fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                query: `
                query {
                        StoreSettings(id: "Home")
                        {
                            featuredTarts {
                                name
                            }
                        }
                    }
                `,
            })
        }).then(res => res.json()).then(res => {
            setFeaturedTarts(res.data.StoreSettings.featuredTarts)
        })
    }, [])
    return {
        featuredTarts
    }
}