import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";
import MenuScreen from "../../screens/MenuScreen";

const Menu = () => {
  return (
    <Layout className="min-h-screen flex flex-col">
      <PageTitle title="Menu" />

      <MenuScreen />
    </Layout>
  );
};

export default Menu;
