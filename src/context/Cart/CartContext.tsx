import React, {
  createContext,
  memo,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { IProduct } from '../../types';

export interface CartContextProps {
  cartList: IProduct[];
  incrementQuantity: (newItem: IProduct) => void;
  decrementQuantity: (newItem: IProduct) => void;
}

export const CartContext = createContext<CartContextProps | null>(null);

export const CartProvider = memo<{ children: ReactNode }>(({ children }) => {
  const [cartList, setCartList] = useState<IProduct[]>([]);

  const incrementQuantity = useCallback(
    (newItem: IProduct) => {
      const foundItem = cartList.find((item) => item.id === newItem.id);
      if (foundItem) {
        if (foundItem.quantityLeft !== 1) {
          const newList = cartList.map((item) =>
            item.id === newItem.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  quantityLeft: item.quantityLeft - 1,
                }
              : item,
          );
          setCartList(newList);
        }
      } else {
        newItem.quantity = 1;
        setCartList((value) => [...value, newItem]);
      }
    },
    [cartList],
  );

  const decrementQuantity = useCallback(
    (newItem: IProduct) => {
      const foundItem = cartList.find((item) => item.id === newItem.id);
      if (foundItem?.quantity !== 1) {
        if (foundItem?.quantity) {
          const newArr = cartList.map((item) =>
            item.id === newItem.id
              ? {
                  ...item,
                  quantity: item.quantity - 1,
                  quantityLeft: item.quantityLeft + 1,
                }
              : item,
          );
          setCartList(newArr);
        }
      } else {
        const newArr = cartList.filter((item) => item.id !== newItem.id);
        setCartList(newArr);
      }
    },
    [cartList],
  );

  const value = useMemo(
    () => ({
      cartList,
      incrementQuantity,
      decrementQuantity,
    }),
    [incrementQuantity, decrementQuantity, cartList],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
});
