import cx from "classnames";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { Props } from "./props";

const Layout: React.FC<Props> = (props) => {
  const { children, className } = props;
  const { breakpoint } = useBreakpoint();

  return (
    <div
      className={cx(
        "container min-h-full mx-auto border-2",
        {
          "max-w-md": ["xl", "xxl"].includes(breakpoint),
          "max-w-7xl": ["md", "lg"].includes(breakpoint),
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Layout;
