import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import cx from "classnames";
import { Props } from "./props";

const QuantityPicker: React.FC<Props> = (props) => {
  const { quantity, setQuantity } = props;

  return (
    <div className="flex flex-row items-center justify-center p-8">
      <FontAwesomeIcon
        icon={faCircleMinus}
        className={cx("text-primary cursor-pointer h-7 w-7 p-2", {
          "opacity-60 cursor-not-allowed": quantity <= 1,
        })}
        onClick={quantity > 1 ? () => setQuantity(quantity - 1) : () => {}}
      />
      <span className="px-3 text-xl font-bold">{quantity}</span>
      <FontAwesomeIcon
        icon={faCirclePlus}
        className="text-primary cursor-pointer h-7 w-7 p-2"
        onClick={() => setQuantity(quantity + 1)}
      />
    </div>
  );
};

export default QuantityPicker;
