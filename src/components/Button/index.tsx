import cx from "classnames";
import { Props } from "./props";
import { Wrapper } from "./styles";

const Button: React.FC<Props> = (props) => {
  const { text, className, onClick, disabled } = props;

  return (
    <Wrapper
      className={cx(className, { "is-disabled": disabled })}
      onClick={onClick}
      disabled={disabled}
    >
      <p className="btn-text">{text}</p>
    </Wrapper>
  );
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
