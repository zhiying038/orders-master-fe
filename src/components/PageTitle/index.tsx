import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import cx from "classnames";
import { Props } from "./props";

const PageTitle: React.FC<Props> = (props) => {
  const {
    title,
    className,
    subtitle,
    enableBack = false,
    onActionBack,
  } = props;

  return (
    <div className={cx("flex flex-row items-center", className)}>
      {enableBack && (
        <div className="p-2">
          <FontAwesomeIcon icon={faArrowLeft} onClick={onActionBack} />
        </div>
      )}

      <div className="flex-grow">
        <h2 className="font-bold text-2xl text-center">{title}</h2>
        {subtitle && (
          <h4 className="mt-0 mb-1 font-normal text-base">{subtitle}</h4>
        )}
      </div>
    </div>
  );
};

export default PageTitle;
