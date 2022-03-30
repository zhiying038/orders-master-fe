import cx from "classnames";
import { Props } from "./props";

const Button: React.FC<Props> = (props) => {
  const {
    className,
    onClick,
    disabled,
    children,
    buttonClassName,
    round,
    size,
    block,
    center = true,
    primary,
    link,
  } = props;

  return (
    <div className={cx("flex flex-row", className)}>
      <button
        className={cx(
          "justify-center rounded-lg content-center",
          {
            "opacity-60": disabled,
            "rounded-full": round,
            "h-12 px-6": size === "large",
            "h-10 px-5": size === "regular",
            "h-8 px-4": size === "small",
            "flex-auto": block,
            "items-center": center,
            "bg-primary": primary,
            "text-primary h-0": link,
          },
          buttonClassName
        )}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
};

Button.defaultProps = {
  center: true,
  size: "large",
};

export default Button;
