import React from "react";

const CategorieSliderItem = ({categorieName,filterProductWithCategorieHandler}) => {
  return (
    <div className="page--search-product__categorie-list__item">
      <h3 onClick={_=>{
        filterProductWithCategorieHandler(categorieName)
      }}>{categorieName}</h3>
    </div>
  );
};

export default CategorieSliderItem;
