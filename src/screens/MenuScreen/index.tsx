import cx from "classnames";
import map from "lodash/map";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DefaultItem from "../../assets/default-item.svg";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import OrderInfo from "../../components/Order";
import SearchBar from "../../components/SearchBar";
import { useGetItemsQuery } from "../../graphql";
import { useCart } from "../../hooks/useCart";
import { CartProps } from "./props";

const MenuScreen = () => {
  const navigate = useNavigate();

  const { findItemFromCart, addItemToCart } = useCart();
  const { data, refetch } = useGetItemsQuery();

  const [showItem, setShowItem] = useState<boolean>(false);
  const [itemSelected, setItemSelected] = useState<CartProps | null>(null);

  const handleFilterItem = (value: string) => {
    refetch({
      searchText: value,
    });
  };

  const handleAdd = (item) => {
    addItemToCart(item);
    setShowItem(false);
    setItemSelected(null);
  };

  return (
    <>
      <SearchBar onSearch={handleFilterItem} className="w-full" />

      <div className="mt-4 flex-grow">
        {map(data?.getItems, (item, index) => {
          const foundItem = findItemFromCart(item?.code);
          const firstImage = item?.images?.[0];

          return (
            <div
              className={cx(
                `flex flex-row items-center p-2 mb-4 cursor-pointer shadow-md rounded-lg`,
                {
                  "border-2 border-primary": foundItem,
                }
              )}
              key={index}
              onClick={() => {
                setItemSelected({
                  ...item,
                  quantity: foundItem ? foundItem?.quantity : 1,
                });
                setShowItem(true);
              }}
            >
              <img
                style={{ width: "72px", height: "72px", minWidth: "80px" }}
                src={firstImage?.link ?? DefaultItem}
                alt={firstImage?.alt ?? item?.name}
              />

              <div className="flex-grow p-1">
                <p className="font-bold text-md">{item?.name}</p>

                <div className="flex flex-row items-center">
                  <p>
                    {item?.currency}{" "}
                    {parseFloat(item?.price?.toString()).toFixed(2)}
                  </p>
                </div>
              </div>

              {foundItem && (
                <p className="text-xl font-bold mr-2">x{foundItem?.quantity}</p>
              )}
            </div>
          );
        })}
      </div>

      <Button
        block
        primary
        size="large"
        className="mt-2"
        onClick={() => navigate("/cart")}
      >
        Done
      </Button>

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

export default MenuScreen;
