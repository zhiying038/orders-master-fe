import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";
import CartScreen from "../../screens/CartScreen";

const Cart = () => {
  const navigate = useNavigate();

  return (
    <Layout className="min-h-screen flex flex-col p-0">
      <PageTitle
        title="Place Order"
        enableBack
        onActionBack={() => navigate("/")}
        className="px-3 pt-2"
      />
      <CartScreen />
    </Layout>
  );
};

export default Cart;
