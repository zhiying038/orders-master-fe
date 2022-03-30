import map from "lodash/map";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
      <SearchBar onSearch={handleFilterItem} className="w-full px-3" />

      <div className="mt-4 flex-grow p-3">
        {map(data?.getItems, (item, index) => {
          const foundItem = findItemFromCart(item?.code);
          const foundClass = "border-2 border-primary";

          return (
            <OrderInfo.Card
              key={index}
              item={item}
              className={foundItem && foundClass}
              onClickItme={() => {
                setItemSelected({
                  ...item,
                  quantity: foundItem ? foundItem?.quantity : 1,
                });
                setShowItem(true);
              }}
            >
              {foundItem && (
                <p className="text-xl font-bold mr-2">x{foundItem?.quantity}</p>
              )}
            </OrderInfo.Card>
          );
        })}
      </div>

      <div className="p-3 bg-black">
        <Button
          block
          primary
          size="large"
          className="mt-2"
          onClick={() => navigate("/cart")}
          buttonClassName="uppercase font-bold"
        >
          Done
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

export default MenuScreen;
