import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { client } from "./config/apollo.config";
import OrderForm from "./pages/OrderForm";

function App() {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<OrderForm />} />
          </Routes>
        </BrowserRouter>>
      </Layout>
    </ApolloProvider>
  );
}

export default App;
