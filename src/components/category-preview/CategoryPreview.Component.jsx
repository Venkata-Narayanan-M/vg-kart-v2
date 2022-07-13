import ProductCard from "../product-card/ProductCard.Component";

import {
  CategoryPreviewContainer,
  LinkContianer,
  PreviewContainer,
} from "./CategoryPreview.Styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <LinkContianer to={title}>{title.toUpperCase()}</LinkContianer>
      </h2>
      <PreviewContainer>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </PreviewContainer>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
