import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/Home.Component";
import Navigation from "./routes/navigation/Navigation.Component";
import Authentication from "./routes/authentication/Authentication.Component";

const Shop = () => {
  return <h1>Shop Page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
