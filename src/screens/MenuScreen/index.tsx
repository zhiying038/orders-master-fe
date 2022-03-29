import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import find from "lodash/find";
import findIndex from "lodash/findIndex";
import get from "lodash/get";
import map from "lodash/map";
import { useState } from "react";
import DefaultItem from "../../assets/default-item.svg";
import { ItemInfoFragment, useGetItemsQuery } from "../../graphql";

import { CartProps } from "./props";

const MenuScreen = () => {
  const { data } = useGetItemsQuery();
  const [cart, setCart] = useState<CartProps[]>([]);

  const findItemFromCart = (itemCode: string) => {
    const foundIndex = findIndex(cart, ["itemCode", itemCode]);
    return {
      found: foundIndex !== -1,
      index: foundIndex,
      data: get(cart, [foundIndex]),
    };
  };

  const handleIncrement = (item: ItemInfoFragment) => {
    const foundItem = findItemFromCart(item.code);
    if (!foundItem.found) {
      const currentCart = [...cart];
      const newItem = {
        itemCode: item.code,
        quantity: 1,
        unitPrice: item.price,
      };
      setCart([...currentCart, newItem]);
      return;
    }

    const quantity = get(foundItem, "data.quantity", 0);
    const newQuantity = quantity + 1;
    const currentCart = [...cart];
    currentCart[foundItem.index].quantity = newQuantity;
    setCart(currentCart);
  };

  const handleDecrement = (item: ItemInfoFragment) => {
    const foundItem = findItemFromCart(item.code);
    if (foundItem.found) {
      const quantity = get(foundItem, "data.quantity", 0);
      const nextQuantity = quantity - 1;
      const newQuantity = nextQuantity <= 0 ? 0 : nextQuantity;
      const currentCart = [...cart];
      currentCart[foundItem.index].quantity = newQuantity;
      setCart(currentCart);
    }
  };

  return (
    <div>
      {map(data?.getItems, (item, index) => {
        const foundItem = find(cart, { itemCode: item.code });
        const quantity = foundItem?.quantity ?? 0;

        return (
          <div className="flex flex-row items-center" key={index}>
            <img
              style={{ width: "72px", height: "72px", minWidth: "80px" }}
              src={DefaultItem}
              alt={item?.name}
            />

            <div className="flex-grow p-1">
              <p className="font-bold text-md">{item?.name}</p>

              <div className="flex flex-row items-center">
                <p>
                  {item?.currency}{" "}
                  {parseFloat(item?.price?.toString()).toFixed(2)}
                </p>

                <div className="flex-grow text-right">
                  <FontAwesomeIcon
                    icon={faCircleMinus}
                    className="text-primary cursor-pointer"
                    onClick={() => handleDecrement(item)}
                  />
                  <span className="px-1">{quantity}</span>
                  <FontAwesomeIcon
                    icon={faCirclePlus}
                    className="text-primary cursor-pointer"
                    onClick={() => handleIncrement(item)}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuScreen;
