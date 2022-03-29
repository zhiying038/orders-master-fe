import map from "lodash/map";
import { Props } from "./props";

const OrderFooter: React.FC<Props> = (props) => {
  const { content, className } = props;

  return (
    <div className={className}>
      {map(content, (cont) => (
        <div className="flex flex-row items-center">
          <div className="flex-none">
            <p className="font-bold">{cont.label}</p>
          </div>
          <div className="flex-grow">
            <p className="text-right">{cont.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderFooter;
