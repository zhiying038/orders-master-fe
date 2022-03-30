import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";
import MenuScreen from "../../screens/MenuScreen";

const Menu = () => {
  const navigate = useNavigate();

  return (
    <Layout className="min-h-screen flex flex-col">
      <PageTitle
        title="Menu"
        enableBack
        onActionBack={() => navigate("/cart")}
        className="p-3"
      />
      <MenuScreen />
    </Layout>
  );
};

export default Menu;
