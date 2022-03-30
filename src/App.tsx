import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { client } from "./config/apollo.config";
import Landing from "./pages/Landing";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import ViewOrders from "./pages/ViewOrders";
import CheckoutSuccess from "./pages/CheckoutSuccess";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<ViewOrders />} />
          <Route path="/checkout/:id" element={<CheckoutSuccess />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
