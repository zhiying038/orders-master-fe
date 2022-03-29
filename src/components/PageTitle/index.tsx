import cx from "classnames";
import { Props } from "./props";

const PageTitle: React.FC<Props> = (props) => {
  const { title, className, subtitle } = props;

  return (
    <div className={cx("text-center", className)}>
      <h2 className="font-bold text-2xl">{title}</h2>
      {subtitle && (
        <h4 className="mt-0 mb-1 font-normal text-base">{subtitle}</h4>
      )}
    </div>
  );
};

export default PageTitle;
