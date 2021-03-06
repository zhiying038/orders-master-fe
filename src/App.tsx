import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { client } from "./config/apollo.config";
import OrderForm from "./pages/OrderForm";
import ViewOrders from "./pages/ViewOrders";

function App() {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<OrderForm />} />
            <Route path="/orders" element={<ViewOrders />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </ApolloProvider>
  );
}

export default App;
