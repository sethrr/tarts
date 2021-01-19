import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';


const FrostingStyles = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 4rem;
        a {
            display: grid;
            grid-template-columns: auto 1fr;
            padding: 5px;
            align-items: center;
            background: var(--primary);
            border-radius: 3px;
            color: white;

            .count {
                background: var(--primary-light);
                padding: 2px 10px;
                color: black;
                margin-left: 5px;
                border-radius: 5px;
            }
            .active {
                background: var(--yellow);
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

export default function ToppingsFilters() {
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
			
            {frostingsWithCount.map((frosting => (
                <Link to={`/frosting/${frosting.name}`} key="{frosting.id}">
                <span className="name">{frosting.name}</span>
                <span className="count">{frosting.count}</span>
                </Link>
            ))
            )}
        
		</FrostingStyles>
	);
}
