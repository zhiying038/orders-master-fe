import { CartProps } from "../../../hooks/useCart";

export type Props = {
  item: CartProps | null;
  onClose: () => void;
  handleAdd: (values: any) => void;
  isSelected?: boolean;
};
