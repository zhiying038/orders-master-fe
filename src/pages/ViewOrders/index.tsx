import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";
import ViewOrdersScreen from "../../screens/ViewOrdersScreen";

const ViewOrders = () => {
  const navigate = useNavigate();

  return (
    <Layout className="min-h-screen flex flex-col">
      <PageTitle
        title="All Orders"
        enableBack
        onActionBack={() => navigate("/")}
      />

      <ViewOrdersScreen />
    </Layout>
  );
};

export default ViewOrders;
