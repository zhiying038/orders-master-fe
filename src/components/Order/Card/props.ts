import { ItemInfoFragment } from "../../../graphql";

export type Props = {
  className?: string;
  onClickItme?: () => void;
  item: ItemInfoFragment;
};
