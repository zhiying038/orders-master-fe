import findIndex from "lodash/findIndex";
import set from "lodash/set";
import { useEffect, useState } from "react";
import { useLocalStorage } from "react-use";

export const useCart = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [cart, setCart, removeCart] = useLocalStorage("cart", "{}");

  const setOnCart = (items: any[]): void => {
    setCart(JSON.stringify({ items }));
  };

  const deleteCart = () => removeCart();

  const addItemToCart = (item: any) => {
    const itemCode = item?.code;
    const foundIndex = findIndex(cartItems, (e) => {
      return e.code === itemCode;
    });

    let currentItems: any[] = [];
    if (foundIndex === -1) {
      currentItems = [...cartItems, item];
    } else {
      currentItems = [...set(cartItems, foundIndex, item)];
    }

    setOnCart(currentItems);
  };

  const getCartFromLocalStorage = (): any[] => {
    const storage = JSON.parse(cart ?? "{}");
    return storage?.items;
  };

  useEffect(() => {
    const items = getCartFromLocalStorage() ?? [];
    setCartItems(items);
  }, [cart]);

  return { addItemToCart, cartItems, deleteCart };
};
