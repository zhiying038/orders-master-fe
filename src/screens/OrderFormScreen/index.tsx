import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import find from "lodash/find";
import findIndex from "lodash/findIndex";
import get from "lodash/get";
import map from "lodash/map";
import toString from "lodash/toString";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import DefaultItem from "../../assets/default-item.svg";
import Button from "../../components/Button";
import Divider from "../../components/Divider";
import OrderInfo from "../../components/OrderInfo";
import PageTitle from "../../components/PageTitle";
import {
  ItemInfoFragment,
  useCalculateTotalPriceLazyQuery,
  useGetItemsQuery,
  useCreateOrderMutation,
  useGetNextReferenceNumberQuery,
} from "../../graphql";
import { CartProps } from "./props";
import { Wrapper } from "./styles";

const OrderFormScreen = () => {
  const { data } = useGetItemsQuery();
  const { data: nextRefData } = useGetNextReferenceNumberQuery();
  const [calculateTotal, { data: priceData }] =
    useCalculateTotalPriceLazyQuery();

  const [createOrder] = useCreateOrderMutation({
    onCompleted: () => {
      alert("Successfully created order");
      setCart([]);
    },
    onError: () => {
      alert("Failed to create order");
    },
  });

  const [cart, setCart] = useState<CartProps[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  useEffect(() => {
    if (cart.length === 0) return;
    calculateTotal({
      variables: {
        input: {
          orders: cart,
        },
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  // ===== VARIABLES
  const price = priceData?.calculateTotalPrice;
  const refNumber = nextRefData?.getNextReferenceNumber;

  // ===== EVENTS
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

  const handleSubmit = () => {
    createOrder({
      variables: {
        input: {
          orders: cart,
        },
      },
    });
  };

  return (
    <Wrapper>
      <PageTitle title="Place Order" />

      <div className="flex flex-col mt-4">
        <div>
          <p className="font-bold">Order ID: {refNumber}</p>
        </div>
        <div className="flex items-center mt-2">
          <p className="font-bold">Date: </p>
          <div className="relative w-40 ml-2">
            <DatePicker
              selected={selectedDate}
              dateFormat="dd-MM-yyyy"
              maxDate={dayjs().add(10, "day").toDate()}
              onChange={(date) => setSelectedDate(date ?? new Date())}
            />
          </div>
        </div>
      </div>

      <Divider />

      {/* <div className="mt-4">
        {map(data?.getItems, (item, index) => {
          const foundItem = find(cart, { itemCode: item.code });
          const quantity = foundItem?.quantity ?? 0;

          return (
            <div className="flex flex-row items-center" key={index}>
              <img className="item-image" src={DefaultItem} alt={item?.name} />

              <div className="item-description flex-grow p-1">
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
      </div> */}

      {/* 
      <OrderInfo
        content={[
          {
            label: "Total Amount",
            value: `${price?.currency ?? "MYR"} ${parseFloat(
              toString(price?.price ?? 0)
            ).toFixed(2)}`,
          },
        ]}
      /> */}

      <Button
        block
        size="large"
        className="mt-2"
        onClick={handleSubmit}
        disabled={price?.price === 0 || cart.length === 0}
      >
        Submit
      </Button>
    </Wrapper>
  );
};

export default OrderFormScreen;
