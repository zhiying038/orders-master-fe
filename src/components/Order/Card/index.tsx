import cx from "classnames";
import DefaultItem from "../../../assets/default-item.svg";
import { Props } from "./props";

const OrderCard: React.FC<Props> = (props) => {
  const { children, className, onClickItme, item } = props;

  const firstImage = item?.images?.[0];

  return (
    <div
      className={cx(
        `flex flex-row items-center p-2 mb-4 cursor-pointer shadow-md rounded-lg`,
        className
      )}
      onClick={onClickItme}
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
            {item?.currency} {parseFloat(String(item?.price)).toFixed(2)} Each
          </p>
        </div>
      </div>

      {children}
    </div>
  );
};

export default OrderCard;
