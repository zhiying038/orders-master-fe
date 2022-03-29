import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";
import OrderFormScreen from "../../screens/OrderFormScreen";

const OrderForm = () => {
  return (
    <Layout>
      <PageTitle title="Place Order" />
      <OrderFormScreen />
    </Layout>
  );
};

export default OrderForm;
