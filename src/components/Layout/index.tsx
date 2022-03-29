import cx from "classnames";
import { Wrapper } from "./styles";
import { Props } from "./props";
import { useBreakpoint } from "../../hooks/useBreakpoint";

const Layout: React.FC<Props> = (props) => {
  const { children, className } = props;
  const { breakpoint } = useBreakpoint();

  return (
    <Wrapper
      className={cx("container min-h-full p-4", {
        "w-5/12": ["xl", "xxl"].includes(breakpoint),
        "max-w-7xl": ["md", "lg"].includes(breakpoint),
        className,
      })}
    >
      {children}
    </Wrapper>
  );
};

export default Layout;
