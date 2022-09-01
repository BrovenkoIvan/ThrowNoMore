import React, {
  createContext,
  memo,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { IProduct } from '../../types';

interface CartContextProps {
  cartList: IProduct[];
  incrementQuantity(newItem: IProduct): void;
  decrementQuantity(newItem: IProduct): void;
}

export const CartContext = createContext<CartContextProps | null>(null);

export const CartProvider = memo<{ children: ReactNode }>(({ children }) => {
  const [cartList, setCartList] = useState<IProduct[]>([]);

  const incrementQuantity = useCallback(
    (newItem: IProduct) => {
      const foundItem = cartList.find((item) => item.id === newItem.id);
      if (foundItem) {
        if (foundItem.quantityLeft !== 1) {
          // const newList = cartList
          setCartList((prevState) => [
            ...prevState.map((item) =>
              item.id === newItem.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                    quantityLeft: item.quantityLeft - 1,
                  }
                : item,
            ),
          ]);
        }
      } else {
        newItem.quantity = 1;
        setCartList((prevState) => [...prevState, newItem]);
      }
    },
    [cartList],
  );

  const decrementQuantity = useCallback(
    (newItem: IProduct) => {
      const foundItem = cartList.find((item) => item.id === newItem.id);
      if (foundItem?.quantity !== 1) {
        if (foundItem?.quantity) {
          setCartList((prevState) => [
            ...prevState.map((item) =>
              item.id === newItem.id
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                    quantityLeft: item.quantityLeft + 1,
                  }
                : item,
            ),
          ]);
        }
      } else {
        setCartList((prevState) => [
          ...prevState.filter((item) => item.id !== newItem.id),
        ]);
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
