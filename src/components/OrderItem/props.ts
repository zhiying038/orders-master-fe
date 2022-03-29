import { ItemInfoFragment } from "../../graphql";

export type Props = {
  item?: any;
  onClose: () => void;
  inQuantity?: number;
};
