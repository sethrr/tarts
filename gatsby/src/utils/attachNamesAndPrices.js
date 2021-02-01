import formatMoney from './formatMoney';
import calculateTartPrice from './calculateTartPrice';

export default function attachNamesAndPrices(order, tarts) {
  return order.map((item) => {
    const tart = tarts.find((tart) => tart.id === item.id);
    return {
      ...item,
      name: tart.name,
      thumbnail: tart.image.asset.fluid.src,
      price: formatMoney(calculateTartPrice(tart.price, item.size)),
    };
  });
}