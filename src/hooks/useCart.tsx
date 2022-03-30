import find from "lodash/find";
import findIndex from "lodash/findIndex";
import filter from "lodash/filter";
import reduce from "lodash/reduce";
import set from "lodash/set";
import { useEffect, useState } from "react";
import { useLocalStorage } from "react-use";
import { ItemInfoFragment } from "../graphql";

export type CartProps = ItemInfoFragment & { quantity: number };

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartProps[]>([]);
  const [numItems, setNumItems] = useState<number>(0);
  const [cart, setCart, removeCart] = useLocalStorage("cart", "{}");

  const setOnCart = (items: CartProps[]): void => {
    setCart(JSON.stringify({ items }));
  };

  const deleteCart = () => removeCart();

  const addItemToCart = (item: CartProps) => {
    const itemCode = item?.code;
    const foundIndex = findIndex(cartItems, (e) => {
      return e.code === itemCode;
    });

    let currentItems: CartProps[] = [];
    if (foundIndex === -1) {
      currentItems = [...cartItems, item];
    } else if (item?.quantity === 0) {
      currentItems = filter(cartItems, (a, b) => b !== foundIndex);
    } else {
      currentItems = [...set(cartItems, foundIndex, item)];
    }

    setOnCart(currentItems);
  };

  const findItemFromCart = (code?: string) => {
    if (!code) return;
    return find(cartItems, (e) => e.code === code);
  };

  const getCartFromLocalStorage = (): CartProps[] => {
    const storage = JSON.parse(cart ?? "{}");
    return storage?.items;
  };

  useEffect(() => {
    const items = getCartFromLocalStorage() ?? [];
    setCartItems(items);
  }, [cart]);

  useEffect(() => {
    const count = reduce(cartItems, (a, b) => a + b?.quantity, 0);
    setNumItems(count);
  }, [cartItems]);

  return {
    addItemToCart,
    cartItems,
    itemQuantity: numItems,
    findItemFromCart,
    deleteCart,
  };
};
