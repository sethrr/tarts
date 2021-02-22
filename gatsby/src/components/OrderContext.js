import React, { useState, useEffect } from 'react';
import {getLocalStorage, setLocalStorage} from '../utils/handleLocalStorage';
// Create a order context
const OrderContext = React.createContext();


const initialState = [];

export function OrderProvider({ children }) {
  // we need to stick state in here
  const [order, setOrder] = useState(() => getLocalStorage("order", initialState));

  useEffect(() => {
    setLocalStorage("order", order);
  }, [order]);


  return (
    <OrderContext.Provider value={[order, setOrder]}>
      {children}
    </OrderContext.Provider>
  );
}

export default OrderContext;