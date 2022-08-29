import { useContext } from 'react';
import AppContext from '../context';

export const useCart = () => {
  const { cardItems, setCardItmes } = useContext(AppContext);
  const totalPrice = cardItems.reduce(
    (sum, obj) => +obj.price?.replace(' ', '') + sum,
    0
  );

  return { cardItems, setCardItmes, totalPrice };
};
