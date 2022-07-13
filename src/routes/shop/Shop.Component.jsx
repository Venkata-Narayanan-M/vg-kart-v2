import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categories-preview/CategoriesPreview.Component";
import CategoryRoute from "../category/Category.Route.Component";

import "./Shop.Styles.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<CategoryRoute />} />
    </Routes>
  );
};

export default Shop;
