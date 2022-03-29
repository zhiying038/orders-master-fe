import cx from "classnames";
import { Props } from "./props";

const PageTitle: React.FC<Props> = (props) => {
  const { title, className, subtitle } = props;

  return (
    <div className={cx("text-center", className)}>
      <h2 className="mb-1 font-bold">{title}</h2>
      {subtitle && <h4 className="mt-0 mb-1 font-normal">{subtitle}</h4>}
    </div>
  );
};

export default PageTitle;
