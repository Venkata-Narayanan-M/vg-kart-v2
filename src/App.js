import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/Home.Component";
import Navigation from "./routes/navigation/Navigation.Component";
import SignIn from "./routes/sign-in/SignIn.Component";

const Shop = () => {
  return <h1>Shop Page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
