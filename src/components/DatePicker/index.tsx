import cx from "classnames";
import dayjs from "dayjs";
import DatePicker from "react-datepicker";
import { Props } from "./props";
import { Wrapper } from "./styles";

const CustomDatepicker: React.FC<Props> = (props) => {
  const { handleSelect, selectedDate, className } = props;

  return (
    <Wrapper className={cx("relative w-40", className)}>
      <DatePicker
        selected={selectedDate}
        dateFormat="dd-MM-yyyy"
        maxDate={dayjs().add(10, "day").toDate()}
        onChange={(date) => handleSelect(date ?? new Date())}
      />
    </Wrapper>
  );
};

export default CustomDatepicker;
