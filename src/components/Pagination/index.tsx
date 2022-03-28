import Button from "../Button";
import { Props } from "./props";
import { Wrapper } from "./styles";

const Pagination: React.FC<Props> = (props) => {
  const { disabledNext, disabledPrev, onClickNext, onClickPrev, className } =
    props;

  return (
    <Wrapper className={className}>
      <Button onClick={onClickPrev} disabled={disabledPrev}>
        Previous
      </Button>

      <Button onClick={onClickNext} disabled={disabledNext}>
        Next
      </Button>
    </Wrapper>
  );
};

export default Pagination;
