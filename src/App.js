import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { getCurrentUser } from "./utils/firebase/firebase.utils";
import Home from "./routes/home/Home.Component";
import Navigation from "./routes/navigation/Navigation.Component";
import Authentication from "./routes/authentication/Authentication.Component";
import Shop from "./routes/shop/Shop.Component";
import Checkout from "./routes/checkout/Checkout.Component";
import { checkUserSession } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />}></Route>
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
