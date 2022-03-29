import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";
import ViewOrdersScreen from "../../screens/ViewOrdersScreen";

const ViewOrders = () => {
  return (
    <Layout>
      <PageTitle title="All Orders" />

      <ViewOrdersScreen />
    </Layout>
  );
};

export default ViewOrders;
