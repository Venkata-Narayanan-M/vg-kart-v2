import { useContext } from "react";

import { ProductContext } from "../../contexts/prod.context";
import ProductCard from "../../components/product-card/ProductCard.Component";

import "./Shop.Styles.scss";

const Shop = () => {
  const { products } = useContext(ProductContext);
  console.log(products);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
