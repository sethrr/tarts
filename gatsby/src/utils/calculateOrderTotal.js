import calculateTartPrice from './calculateTartPrice';

export default function calculateOrderTotal(order, tarts) {
  return order.reduce((runningTotal, singleOrder) => {
    const tart = tarts.find(
      (singleTart) => singleTart.id === singleOrder.id
    );
    return runningTotal + calculateTartPrice(tart.price, singleOrder.size);
  }, 0);
}