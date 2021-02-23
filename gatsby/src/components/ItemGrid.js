import { Link } from 'gatsby';
import React from 'react';
import { ItemsGrid, ItemStyles } from '../styles/Grids';

export default function ItemGrid({items}) {
    return (
        <ItemsGrid>
            {items.map((item) => (
                <ItemStyles>
                    <Link to={`/poptart/${item.slug.current}`}>
                    <img src={`${item.image.asset.url}?w=600&h=400&fit=crop`} 
                    alt={item.name}
                    height="400"
                    width="600" 
                    style={{
                        background: `url(${item.image.asset.metadata.lqip})`,
                        backgroundSize: "cover"
                    }}
                    />
                    </Link>
                        <Link to={`/poptart/${item.slug.current}`}>
                    <h3 className="item-name">
                        {item.name}
                    </h3>
                    </Link>
                        <Link to={`/poptart/${item.slug.current}`}>
                    <button className="item-cta btn"> Order Now</button>
                    </Link>
                </ItemStyles>
            ))}
        </ItemsGrid>
    )
}