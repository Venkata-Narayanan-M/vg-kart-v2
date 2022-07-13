import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/ProductCard.Component";

import "./Category.Route.Styles.scss";

const CategoryRoute = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const { category } = useParams();
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div>
            <p>Loading Products ...</p>
          </div>
        )}
      </div>
    </>
  );
};

export default CategoryRoute;
