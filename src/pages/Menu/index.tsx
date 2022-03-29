import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";
import MenuScreen from "../../screens/MenuScreen";

const Menu = () => {
  return (
    <Layout>
      <PageTitle title="Menu" />

      <MenuScreen />
    </Layout>
  );
};

export default Menu;
