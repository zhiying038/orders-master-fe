import cx from "classnames";
import { Wrapper } from "./styles";
import { Props } from "./props";

const Layout: React.FC<Props> = (props) => {
  const { children, className } = props;

  return (
    <Wrapper>
      <div className={cx("layout-content flex-vertical-center", className)}>
        {children}
      </div>
    </Wrapper>
  );
};

export default Layout;
