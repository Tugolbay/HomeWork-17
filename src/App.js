import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Iphone } from "./components/products/Iphone";
import { Cart } from "./components/myCart/Cart";
import { Orders } from "./components/orders/Orders";
import { IphoneDetail } from "./components/products/IphoneDetail";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout />
      <Routes>
        <Route path="products" element={<Iphone />} />
        <Route path="products/:productId" element={<IphoneDetail />} />
        <Route path="myCart" element={<Cart />} />
        <Route path="myOrders" element={<Orders />} />
      </Routes>
    </div>
  );
}

export default App;
