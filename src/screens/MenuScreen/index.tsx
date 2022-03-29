import map from "lodash/map";
import { useState } from "react";
import DefaultItem from "../../assets/default-item.svg";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import OrderItem from "../../components/OrderItem";
import { useGetItemsQuery } from "../../graphql";

const MenuScreen = () => {
  const { data } = useGetItemsQuery();
  const [showItem, setShowItem] = useState<boolean>(false);
  const [itemSelected, setItemSelected] = useState<any>();

  return (
    <div>
      {map(data?.getItems, (item, index) => {
        return (
          <div
            className="flex flex-row items-center"
            key={index}
            onClick={() => {
              setItemSelected(item);
              setShowItem(true);
            }}
          >
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
              </div>
            </div>
          </div>
        );
      })}

      <Button block size="large" className="mt-2" onClick={() => {}}>
        Submit
      </Button>

      <Modal isOpen={showItem}>
        <OrderItem item={itemSelected} onClose={() => setShowItem(false)} />
      </Modal>
    </div>
  );
};

export default MenuScreen;
