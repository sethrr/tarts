import React from 'react';
import MenuItemStyles from '../styles/MenuItemStyles';
import Img from 'gatsby-image';
import calculateTartPrice from '../utils/calculateTartPrice';
import formatMoney from '../utils/formatMoney';

export default function TartOrder({ order, tarts, removeFromOrder}) {
    
    return ( 
    <> 
    {order.map((singleOrder, index) => {
        const tart = tarts.find(tart => tart.id === singleOrder.id);
        return <MenuItemStyles key={`${singleOrder.id}-${index}`}>
         <Img fluid={tart.image.asset.fluid}> </Img>
        <div className="menu-item-info">
        <h2> {tart.name}</h2>
        <span> {singleOrder.size}</span>
        <p>{formatMoney(calculateTartPrice(tart.price, singleOrder.size))} </p>
        </div>
        <button type="button" className="remove" title={`Remove ${singleOrder.size} ${tart.name} from Order`} onClick={() => removeFromOrder(index)}>&times;</button>
       
        </MenuItemStyles>
    }
    )}

    </>
);
}