import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';


const FrostingStyles = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 5rem;
    margin-top:1rem;
        a {
            display: grid;
            grid-template-columns: auto 1fr;
            padding: 5px 10px;
            align-items: center;
            border: 2px solid var(--primary);
            border-radius: 3px;
            color: var(--primary);

            .count {
				border: 2px solid var(--primary);
                padding: 2px 10px;
				color: var(--primary);
				background: var(--primary-light);
                margin-left: 5px;
                border-radius: 5px;
			}
			
            &[aria-current="page"] {
				background: var(--primary);
				color: white;

				.count {
					background: var(--primary-light);
					color: var(--primary);
				}
            }
        }   
`;


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
	const { toppings, tarts } = useStaticQuery(graphql`
		query {
			toppings: allSanityFrosting {
				nodes {
					name
					id
					glutenfree
				}
			}
			tarts: allSanityPoptarts {
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
	
		
        <FrostingStyles>
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
        
		</FrostingStyles>
		
	);
}
