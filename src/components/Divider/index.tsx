import cx from "classnames";
import { Props } from "./props";

const Divider: React.FC<Props> = (props) => {
  const { className, content } = props;

  return (
    <div className={cx("relative flex py-5 items-center", className)}>
      <div className="flex-grow border-t border-gray-400"></div>
      {content && (
        <span className="flex-shrink mx-4 text-gray-400">Content</span>
      )}
      <div className="flex-grow border-t border-gray-400"></div>
    </div>
  );
};

export default Divider;
