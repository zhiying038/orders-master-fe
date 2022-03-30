import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import map from "lodash/map";
import toString from "lodash/toString";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import CustomDatepicker from "../../components/DatePicker";
import Modal from "../../components/Modal";
import OrderInfo from "../../components/OrderInfo";
import OrderItem from "../../components/OrderItem";
import {
  useCalculateTotalPriceLazyQuery,
  useCreateOrderMutation,
  useGetNextReferenceNumberQuery,
} from "../../graphql";
import { useCart } from "../../hooks/useCart";
import { formatToPayload } from "./helpers";

const CartScreen = () => {
  const navigate = useNavigate();

  // ===== STATES & HOOKS
  const { cartItems, itemQuantity, addItemToCart, findItemFromCart } =
    useCart();
  const { data: nextRefData } = useGetNextReferenceNumberQuery();
  const [calculateTotal, { data: priceData }] =
    useCalculateTotalPriceLazyQuery();

  const [createOrder] = useCreateOrderMutation({
    onCompleted: () => {
      alert("Successfully created order");
    },
    onError: () => {
      alert("Failed to create order");
    },
  });

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [showItem, setShowItem] = useState<boolean>(false);
  const [itemSelected, setItemSelected] = useState<any>();

  // ===== EFFECTS
  useEffect(() => {
    if (cartItems.length === 0) return;
    calculateTotal({
      variables: {
        input: formatToPayload(selectedDate, cartItems),
      },
    });
  }, [cartItems]);

  // ===== VARIABLES
  const price = priceData?.calculateTotalPrice;
  const refNumber = nextRefData?.getNextReferenceNumber;

  // ===== EVENTS
  const handleSubmit = () => {
    createOrder({
      variables: {
        input: formatToPayload(selectedDate, cartItems),
      },
    });
  };

  const handleAdd = (item) => {
    addItemToCart(item);
    setShowItem(false);
    setItemSelected(undefined);
  };

  return (
    <>
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

      <div className="border-t mt-5 flex-grow">
        {map(cartItems, (e, index) => {
          return (
            <div className="flex flex-col mt-3" key={index}>
              <div className="flex flex-row justify-between">
                <p className="font-bold">
                  {e?.name} ( x{e?.quantity} )
                </p>
                <button
                  onClick={() => {
                    setItemSelected(e);
                    setShowItem(true);
                  }}
                >
                  Edit
                </button>
              </div>

              <p>
                {e?.currency}{" "}
                {`${parseFloat(toString(e?.price * e?.quantity)).toFixed(2)}`}
              </p>
            </div>
          );
        })}
      </div>

      <Button onClick={() => navigate("/menu")} size="regular" className="mt-4">
        <FontAwesomeIcon icon={faPlus} className="text-sm" />
        <span className="ml-1">Add Item</span>
      </Button>

      <div className="border-t mt-5 bottom-0">
        <OrderInfo
          content={[
            {
              label: "Number of Items:",
              value: String(itemQuantity) ?? "0",
            },
            {
              label: "Total Amount:",
              value: `${price?.currency ?? "MYR"} ${parseFloat(
                toString(price?.price ?? "0")
              ).toFixed(2)}`,
            },
          ]}
          className="my-2"
        />

        <Button
          block
          size="large"
          className="mt-6"
          onClick={handleSubmit}
          disabled={cartItems.length === 0}
        >
          Checkout
        </Button>
      </div>

      <Modal isOpen={showItem}>
        <OrderItem
          item={itemSelected}
          onClose={() => setShowItem(false)}
          handleAdd={handleAdd}
          isSelected={findItemFromCart(itemSelected?.code)}
        />
      </Modal>
    </>
  );
};

export default CartScreen;
