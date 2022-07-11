import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/Home.Component";
import Navigation from "./routes/navigation/Navigation.Component";
import Authentication from "./routes/authentication/Authentication.Component";
import Shop from "./routes/shop/Shop.Component";
import Checkout from "./routes/checkout/Checkout.Component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
