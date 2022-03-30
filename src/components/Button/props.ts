export type Props = {
  className?: string;
  onClick: () => void;
  disabled?: boolean;
  buttonClassName?: string;
  round?: boolean;
  block?: boolean;
  primary?: boolean;
  center?: boolean;
  size?: "regular" | "large" | "small";
  link?: boolean;
};
