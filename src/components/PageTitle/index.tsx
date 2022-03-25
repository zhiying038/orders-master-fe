import cx from "classnames";
import { Props } from "./props";
import { Wrapper } from "./styles";

const PageTitle: React.FC<Props> = (props) => {
  const { title, className, subtitle } = props;

  return (
    <Wrapper className={cx(className)}>
      <h2 className="title">{title}</h2>
      {subtitle && <h4 className="subtitle">{subtitle}</h4>}
    </Wrapper>
  );
};

export default PageTitle;
