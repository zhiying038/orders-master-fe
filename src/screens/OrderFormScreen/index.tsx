import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import find from "lodash/find";
import findIndex from "lodash/findIndex";
import get from "lodash/get";
import map from "lodash/map";
import { useState, useEffect } from "react";
import DefaultItem from "../../assets/default-item.svg";
import Divider from "../../components/Divider";
import OrderFooter from "../../components/OrderFooter";
import PageTitle from "../../components/PageTitle";
import {
  ItemInfoFragment,
  useCalculateTotalPriceLazyQuery,
  useGetItemsQuery,
} from "../../graphql";
import { CartProps } from "./props";
import { Wrapper } from "./styles";

const OrderFormScreen = () => {
  const { data } = useGetItemsQuery();
  const [calculateTotal, { data: priceData }] =
    useCalculateTotalPriceLazyQuery();

  const [cart, setCart] = useState<CartProps[]>([]);

  useEffect(() => {
    if (cart.length === 0) return;
    calculateTotal({
      variables: {
        input: cart,
      },
    });
  }, [cart]);

  const price = priceData?.calculateTotalPrice;

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
      const newItem = { itemCode: item.code, quantity: 1 };
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
    <Wrapper>
      <PageTitle title="Create Order" subtitle="Place an order" />

      {map(data?.getItems, (item, index) => {
        const foundItem = find(cart, { itemCode: item.code });
        const quantity = foundItem?.quantity ?? 0;

        return (
          <div className="menu-item" key={index}>
            <img className="item-image" src={DefaultItem} />

            <div className="item-description">
              <p className="item-name">{item?.name}</p>

              <div className="item-price">
                <p>
                  {item?.currency}{" "}
                  {parseFloat(item?.price?.toString()).toFixed(2)}
                </p>

                <div className="quantity">
                  <FontAwesomeIcon
                    icon={faCircleMinus}
                    className="icon"
                    onClick={() => handleDecrement(item)}
                  />
                  <span className="value">{quantity}</span>
                  <FontAwesomeIcon
                    icon={faCirclePlus}
                    className="icon"
                    onClick={() => handleIncrement(item)}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <Divider className="divider" />

      <OrderFooter amount={price?.price ?? 0} currency={price?.currency} />
    </Wrapper>
  );
};

export default OrderFormScreen;
