import { Props } from "./props";
import { Wrapper } from "./styles";

const Button: React.FC<Props> = (props) => {
  const { text, className } = props;

  return (
    <Wrapper className={className}>
      <p className="btn-text">{text}</p>
    </Wrapper>
  );
};

export default Button;
