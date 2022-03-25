import cx from "classnames";
import { Props } from "./props";
import { Wrapper } from "./styles";

const Divider: React.FC<Props> = (props) => {
  const { className, type } = props;

  return <Wrapper className={cx(className, type)}></Wrapper>;
};

Divider.defaultProps = {
  type: "solid",
};

export default Divider;
