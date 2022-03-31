import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faPlus } from "@fortawesome/free-solid-svg-icons";
import map from "lodash/map";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import CustomDatepicker from "../../components/DatePicker";
import Modal from "../../components/Modal";
import { OrderInfo } from "../../components/Order";
import {
  useCalculateTotalPriceLazyQuery,
  useCreateOrderMutation,
  useGetNextReferenceNumberQuery,
} from "../../graphql";
import { CartProps, useCart } from "../../hooks/useCart";
import { formatToPayload } from "./helpers";

const CartScreen = () => {
  const navigate = useNavigate();

  // ===== STATES & HOOKS
  const {
    cartItems,
    itemQuantity,
    addItemToCart,
    findItemFromCart,
    deleteCart,
  } = useCart();
  const { data: nextRefData } = useGetNextReferenceNumberQuery();
  const [calculateTotal, { data: priceData }] =
    useCalculateTotalPriceLazyQuery();

  const [createOrder] = useCreateOrderMutation({
    onCompleted: (data) => {
      deleteCart();
      navigate(`/checkout/${data?.createOrder?.id}`);
    },
    onError: () => {
      alert("Failed to create order");
    },
  });

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [showItem, setShowItem] = useState<boolean>(false);
  const [itemSelected, setItemSelected] = useState<CartProps | null>(null);

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
    setItemSelected(null);
  };

  return (
    <>
      <div className="flex flex-col mt-4 p-3">
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

      <Button
        primary
        onClick={() => navigate("/menu")}
        size="regular"
        className="mt-1 border-t px-3 pt-3 justify-end"
      >
        <FontAwesomeIcon icon={faPlus} className="text-sm" />
        <span className="ml-1">Add Item</span>
      </Button>

      <div className="p-3 mt-2 overflow-y-auto scroll-smooth">
        {map(cartItems, (e, index) => {
          return (
            <div className="flex flex-col mt-3" key={index}>
              <div className="flex justify-between">
                <div>
                  <p className="font-bold">
                    {e?.name} ( x{e?.quantity} )
                  </p>
                  <p>
                    {e?.currency}{" "}
                    {`${parseFloat(String(e?.price * e?.quantity)).toFixed(2)}`}
                  </p>
                </div>

                <Button
                  link
                  onClick={() => {
                    setItemSelected(e);
                    setShowItem(true);
                  }}
                >
                  Edit
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-5 flex items-center justify-between bg-black gap-4">
        <div className="flex items-center justify-between">
          <div className="relative inline-block">
            <FontAwesomeIcon
              icon={faBasketShopping}
              className="text-white w-12 h-12 opacity-100"
              style={{ transform: "rotate(-5deg)" }}
            />
            <span
              className="absolute text-white px-2 bottom-0 inline-block rounded-full"
              style={{
                backgroundColor: "#31728d",
                right: "-25%",
              }}
            >
              {itemQuantity}
            </span>
          </div>

          <p className="text-white font-bold ml-4">{`MYR ${parseFloat(
            String(price?.price ?? 0)
          ).toFixed(2)}`}</p>
        </div>

        <Button
          block
          primary
          size="large"
          onClick={handleSubmit}
          disabled={cartItems.length === 0}
          className="flex-grow"
          buttonClassName="uppercase font-bold"
        >
          Checkout
        </Button>
      </div>

      <Modal isOpen={showItem}>
        <OrderInfo.Item
          item={itemSelected}
          onClose={() => setShowItem(false)}
          handleAdd={handleAdd}
          isSelected={!!findItemFromCart(itemSelected?.code)}
        />
      </Modal>
    </>
  );
};

export default CartScreen;
