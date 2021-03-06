import { Props } from "./props";
import { Wrapper } from "./styles";

const OrderFooter: React.FC<Props> = (props) => {
  const { amount, currency } = props;

  return (
    <Wrapper>
      <p className="label">Total Amount:</p>
      <p className="value">
        {currency} {parseFloat(amount.toString()).toFixed(2)}
      </p>
    </Wrapper>
  );
};

OrderFooter.defaultProps = {
  currency: "MYR",
};

export default OrderFooter;
