import map from "lodash/map";
import { CreateOrderDetailInput, PlaceOrderInput } from "../../graphql";
import { CartProps } from "../../hooks/useCart";

export const formatToPayload = (
  date: Date,
  items: CartProps[]
): PlaceOrderInput => {
  return {
    placedAt: date,
    orders: map(items, (e): CreateOrderDetailInput => {
      return {
        itemCode: e?.code,
        quantity: e?.quantity,
        unitPrice: e?.price,
      };
    }),
  };
};
