import {useContext, useState} from 'react';
import OrderContext from '../components/OrderContext';
import attachNamesAndPrices from './attachNamesAndPrices';
import calculateOrderTotal from './calculateOrderTotal';
import formatMoney from './formatMoney';

export default function useTart({tarts, values}){

    const [order, setOrder] = useContext(OrderContext);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    
    function addToOrder(orderedTart) {
        setOrder([...order, orderedTart]);
    }

    function removeFromOrder(index) {
        setOrder([
            ...order.slice(0, index),
            ...order.slice(index + 1)
        ])
    }

    // runs when someone submits the form
    async function submitOrder(e) {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setMessage(null);

        const body = {
            order: attachNamesAndPrices(order, tarts),
            total: formatMoney(calculateOrderTotal(order, tarts)),
            name: values.name,
            email: values.email,
        }

        const res = await fetch(`${process.env.GATSBY_SERVERLESS_BASE}/placeOrder`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        })
        const text = JSON.parse(await res.text());

        if (res.status >= 400 && res.status < 600) {
            setLoading(false);
            setError(text.message);

        }
        else {
            setLoading(false);
            setMessage("Success");
        }
    }


    return {
     order,
     addToOrder,
     removeFromOrder, 
     error,
     loading,
     message,
     submitOrder
    }
}