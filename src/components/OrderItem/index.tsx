import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faCircleMinus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import DefaultItem from "../../assets/default-item.svg";
import Button from "../Button";
import Divider from "../Divider";
import { Props } from "./props";
import { useState } from "react";
import { useCart } from "../../hooks/useCart";

const OrderItem: React.FC<Props> = (props) => {
  const { item, onClose } = props;

  const { addItemToCart } = useCart();
  const [quantity, setQuantity] = useState<number>(item?.quantity ?? 0);

  const firstImage = item?.images?.[0];

  const onAddItem = () => {
    addItemToCart({ ...item, quantity });
    onClose();
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1">
        <div className="text-right">
          <FontAwesomeIcon
            icon={faXmark}
            onClick={onClose}
            className="cursor-pointer h-6 w-6 p-0"
          />
        </div>

        <img
          src={firstImage?.link ?? DefaultItem}
          alt={firstImage?.alt ?? item?.name}
        />

        <Divider />

        <div>
          <h6 className="font-bold text-lg">{item?.name}</h6>
          <p className="text-sm">{item?.code}</p>

          <p className="text-md mt-5">
            {item?.currency}{" "}
            {parseFloat(item?.price.toString() ?? "0").toFixed(2)}
          </p>
        </div>
      </div>

      <div className="border-t p-4 grid grid-cols-2 gap-2">
        <div className="flex flex-row items-center">
          <FontAwesomeIcon
            icon={faCircleMinus}
            className="text-primary cursor-pointer h-6 w-6 p-0"
            onClick={() => setQuantity(quantity === 0 ? 0 : quantity - 1)}
          />
          <span className="px-3">{quantity}</span>
          <FontAwesomeIcon
            icon={faCirclePlus}
            className="text-primary cursor-pointer h-6 w-6 p-0"
            onClick={() => setQuantity(quantity + 1)}
          />
        </div>

        <Button block onClick={onAddItem} disabled={quantity === 0}>
          Add
        </Button>
      </div>
    </div>
  );
};

export default OrderItem;
