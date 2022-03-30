import OrderInfo from "../../components/Order";
import { Props } from "./props";

const OrderDetailScreen: React.FC<Props> = (props) => {
  const { orderId } = props;

  return <OrderInfo.Details orderId={orderId} />;
};

export default OrderDetailScreen;
