import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faCircleMinus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import cx from "classnames";
import { useState } from "react";
import DefaultItem from "../../../assets/default-item.svg";
import Button from "../../Button";
import { Props } from "./props";

const OrderItem: React.FC<Props> = (props) => {
  const { item, onClose, handleAdd, isSelected } = props;

  const [quantity, setQuantity] = useState<number>(item?.quantity ?? 1);

  const firstImage = item?.images?.[0];

  return (
    <div className="flex flex-col h-full bg-gray-100">
      <div className="flex-1">
        <div
          className="absolute rounded-full mt-2 ml-2 top-0 left-0 bg-gray-300"
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

        <div className="flex flex-row items-center justify-center p-8">
          <FontAwesomeIcon
            icon={faCircleMinus}
            className={cx("text-primary cursor-pointer h-7 w-7 p-2", {
              "opacity-60 cursor-not-allowed": quantity === 1,
            })}
            onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)}
          />
          <span className="px-3 text-xl font-bold">{quantity}</span>
          <FontAwesomeIcon
            icon={faCirclePlus}
            className="text-primary cursor-pointer h-7 w-7 p-2"
            onClick={() => setQuantity(quantity + 1)}
          />
        </div>
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
