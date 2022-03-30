import map from "lodash/map";
import { useEffect } from "react";
import OrderInfo from "..";
import { useGetOrderByIdLazyQuery } from "../../../graphql";
import { Props } from "./props";

const OrderDetails: React.FC<Props> = (props) => {
  const { orderId } = props;

  const [fetchOrder, { data }] = useGetOrderByIdLazyQuery();

  useEffect(() => {
    if (!orderId) return;
    fetchOrder({
      variables: {
        id: orderId,
      },
    });
  }, [orderId]);

  const order = data?.getOrderById;

  return (
    <div className="p-3">
      <div className="flex flex-col mt-4">
        <div>
          <p className="font-bold">Order ID: {order?.referenceNumber}</p>
        </div>
        <div className="flex items-center mt-2">
          <p className="font-bold">Date: {order?.createdAt}</p>
        </div>
      </div>

      <div className="mt-3">
        {map(order?.orderDetails, (e, index) => {
          return (
            <OrderInfo.Card item={e?.item} key={index}>
              <p className="font-bold text-xl">x{e?.quantity}</p>
            </OrderInfo.Card>
          );
        })}
      </div>
    </div>
  );
};

export default OrderDetails;
