import map from "lodash/map";
import { CreateOrderDetailInput, PlaceOrderInput } from "../../graphql";

export const formatToPayload = (date: Date, items: any[]): PlaceOrderInput => {
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
