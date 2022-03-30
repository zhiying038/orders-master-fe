import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import DefaultItem from "../../../assets/default-item.svg";
import Button from "../../Button";
import QuantityPicker from "../../QuantityPicker";
import { Props } from "./props";

const OrderItem: React.FC<Props> = (props) => {
  const { item, onClose, handleAdd, isSelected } = props;

  const [quantity, setQuantity] = useState<number>(item?.quantity ?? 1);

  const firstImage = item?.images?.[0];

  return (
    <div className="flex flex-col h-full bg-gray-100">
      <div className="flex-1 relative">
        <div
          className="absolute rounded-full m-2 top-0 left-0 bg-gray-300 inline-block"
          style={{ backgroundColor: "rgba(0,0,0,.3)" }}
        >
          <FontAwesomeIcon
            icon={faXmark}
            onClick={onClose}
            className="cursor-pointer h-6 w-6 p-2 text-white"
          />
        </div>

        <div style={{ height: "34vh", overflow: "hidden" }}>
          <img
            src={firstImage?.link ?? DefaultItem}
            alt={firstImage?.alt ?? item?.name}
            className="object-center object-cover"
          />
        </div>

        <div className="bg-white flex justify-between p-3">
          <div>
            <h2 className="font-bold text-xl break-words">{item?.name}</h2>
            <p className="text-sm">{item?.code}</p>
          </div>

          <p className="font-bold text-xl">
            {parseFloat(String(item?.price ?? 0)).toFixed(2)}
          </p>
        </div>

        {item?.description && (
          <div className="bg-white p-3 mt-5">
            <h4 className="font-bold text-md">Description</h4>
            <p className="text-gray-500 break-words">{item?.description}</p>
          </div>
        )}

        <QuantityPicker quantity={quantity} setQuantity={setQuantity} />
      </div>

      <div className="p-4 bg-black">
        <Button
          primary
          block
          onClick={() => handleAdd?.({ ...item, quantity })}
        >
          <p className="uppercase font-bold text-sm">
            {!isSelected ? "Add to Cart" : "Update Cart"} - MYR{" "}
            {parseFloat(String((item?.price ?? 0) * quantity)).toFixed(2)}
          </p>
        </Button>
      </div>
    </div>
  );
};

export default OrderItem;
