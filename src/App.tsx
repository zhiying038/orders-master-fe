import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { client } from "./config/apollo.config";
import Landing from "./pages/Landing";
import Menu from "./pages/Menu";
import OrderForm from "./pages/OrderForm";
import ViewOrders from "./pages/ViewOrders";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<OrderForm />} />
          <Route path="/orders" element={<ViewOrders />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
