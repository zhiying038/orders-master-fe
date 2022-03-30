import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";
import OrderFormScreen from "../../screens/OrderFormScreen";

const OrderForm = () => {
  const navigate = useNavigate();

  return (
    <Layout className="min-h-screen flex flex-col">
      <PageTitle
        title="Place Order"
        enableBack
        onActionBack={() => navigate("/")}
      />
      <OrderFormScreen />
    </Layout>
  );
};

export default OrderForm;
