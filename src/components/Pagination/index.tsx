import cx from "classnames";
import Button from "../Button";
import { Props } from "./props";

const Pagination: React.FC<Props> = (props) => {
  const { disabledNext, disabledPrev, onClickNext, onClickPrev, className } =
    props;

  return (
    <div className={cx("grid grid-cols-2 gap-2", className)}>
      <Button onClick={onClickPrev} disabled={disabledPrev} block primary>
        Previous
      </Button>

      <Button onClick={onClickNext} disabled={disabledNext} primary block>
        Next
      </Button>
    </div>
  );
};

export default Pagination;
