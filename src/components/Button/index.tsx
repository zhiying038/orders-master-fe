import cx from "classnames";
import { Props } from "./props";
import { Wrapper } from "./styles";

const Button: React.FC<Props> = (props) => {
  const { className, onClick, disabled, children } = props;

  return (
    <Wrapper
      className={cx(className, { "is-disabled": disabled })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Wrapper>
  );
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
