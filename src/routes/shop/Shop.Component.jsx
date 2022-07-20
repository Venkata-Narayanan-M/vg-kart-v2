import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import CategoriesPreview from "../categories-preview/CategoriesPreview.Component";
import CategoryRoute from "../category/Category.Route.Component";
import { fetchCategoriesStart } from "../../store/categories/category.action";

import "./Shop.Styles.scss";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<CategoryRoute />} />
    </Routes>
  );
};

export default Shop;
