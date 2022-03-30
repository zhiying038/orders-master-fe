import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";
import OrderDetailScreen from "../../screens/OrderDetailsScreen";

const ViewOrders = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <Layout className="min-h-screen flex flex-col">
      <PageTitle
        title="View Order"
        enableBack
        onActionBack={() => navigate("/orders")}
        className="p-3"
      />

      <OrderDetailScreen orderId={id as string} />
    </Layout>
  );
};

export default ViewOrders;
