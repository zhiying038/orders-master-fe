import { ItemInfoFragment } from "../../graphql";

export type CartProps = ItemInfoFragment & {
  quantity: number;
};
