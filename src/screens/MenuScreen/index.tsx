import map from "lodash/map";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DefaultItem from "../../assets/default-item.svg";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import OrderItem from "../../components/OrderItem";
import SearchBar from "../../components/SearchBar";
import { useGetItemsQuery } from "../../graphql";
import { useCart } from "../../hooks/useCart";

const MenuScreen = () => {
  const navigate = useNavigate();

  const { findItemFromCart } = useCart();
  const { data, refetch } = useGetItemsQuery();

  const [showItem, setShowItem] = useState<boolean>(false);
  const [itemSelected, setItemSelected] = useState<any>();

  const handleFilterItem = (value: string) => {
    refetch({
      searchText: value,
    });
  };

  return (
    <div className="mt-4">
      <SearchBar onSearch={handleFilterItem} />

      <div className="mt-4">
        {map(data?.getItems, (item, index) => {
          const foundItem = findItemFromCart(item?.code);
          const foundClass = "border-2 border-primary rounded-lg";

          const firstImage = item?.images?.[0];

          return (
            <div
              className={`flex flex-row items-center p-2 mb-4 ${
                foundItem && foundClass
              }`}
              key={index}
              onClick={() => {
                setItemSelected({
                  ...item,
                  quantity: foundItem ? foundItem?.quantity : 0,
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
        size="large"
        className="mt-2"
        onClick={() => navigate("/cart")}
      >
        Done
      </Button>

      <Modal isOpen={showItem}>
        <OrderItem item={itemSelected} onClose={() => setShowItem(false)} />
      </Modal>
    </div>
  );
};

export default MenuScreen;
