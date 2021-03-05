import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';



function countTartsInFrostings(tarts) {
	const counts = tarts.map((tart) => tart.frosting).flat().reduce((acc, frosting) => {
		const existingFrosting = acc[frosting.id];
		if (existingFrosting) {
			existingFrosting.count += 1;
		} else {
			acc[frosting.id] = {
				id: frosting.id,
				name: frosting.name,
				count: 1
			};
		}
		return acc;
	}, {});

	const sortedFrostings = Object.values(counts).sort((a, b) => b.count - a.count);
	return sortedFrostings;
}

export default function ToppingsFilters({ activeFrosting }) {
	const { tarts } = useStaticQuery(graphql`
		query {
			toppings: allSanityFrosting {
				nodes {
					name
					id
					glutenfree
				}
			}
			tarts: allSanityProduct {
				nodes {
					frosting {
						name
						id
					}
				}
			}
		}
	`);

	const frostingsWithCount = countTartsInFrostings(tarts.nodes);

	return (
	
		
        <div>
			<Link to="/poptarts">
				<span className="name">All</span>
				<span className="count">{tarts.nodes.length}</span>
			</Link>
            {frostingsWithCount.map((frosting => (
                <Link to={`/frosting/${frosting.name}`} key={frosting.id} className={frosting.name === activeFrosting ? 'active' : ''}>
                <span className="name">{frosting.name}</span>
                <span className="count">{frosting.count}</span>
                </Link>
            ))
            )}
        
		</div>
		
	);
}
