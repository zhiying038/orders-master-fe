import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import CustomDatepicker from "../../components/DatePicker";
import Divider from "../../components/Divider";
import PageTitle from "../../components/PageTitle";
import {
  useCalculateTotalPriceLazyQuery,
  useCreateOrderMutation,
  useGetNextReferenceNumberQuery,
} from "../../graphql";
import { CartProps } from "./props";

const OrderFormScreen = () => {
  const navigate = useNavigate();

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
    <div>
      <PageTitle title="Place Order" />

      <div className="flex flex-col mt-4">
        <div>
          <p className="font-bold">Order ID: {refNumber}</p>
        </div>
        <div className="flex items-center mt-2">
          <p className="font-bold">Date: </p>
          <CustomDatepicker
            className="ml-2"
            selectedDate={selectedDate}
            handleSelect={setSelectedDate}
          />
        </div>
      </div>

      <Divider />

      <div>
        <Button onClick={() => navigate("/menu")} size="regular">
          <FontAwesomeIcon icon={faPlus} className="text-sm" />
          <span className="ml-1">Add Item</span>
        </Button>
      </div>

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
    </div>
  );
};

export default OrderFormScreen;
