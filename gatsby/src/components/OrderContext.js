import React, { useState, useEffect } from 'react';
import {getLocalStorage, setLocalStorage} from '../utils/handleLocalStorage';
// Create a order context
const OrderContext = React.createContext();


const initialState = [];

export function OrderProvider({ children }) {
  // we need to stick state in here
  const [order, setOrder] = useState(() => getLocalStorage("order", initialState));
  const [cartCount, setCartCount] = useState();
  // const cartCount = useState(() => getLocalStorage("order", order);

  useEffect(() => {
    setLocalStorage("order", order);
    setCartCount(order.length);
  }, [order]);


  return (
    <OrderContext.Provider value={[order, setOrder, cartCount, setCartCount]}>
      {children}
    </OrderContext.Provider>
  );
}

export default OrderContext;