import React from "react";
import { useDispatch } from "react-redux";
import { productSliceAction } from "../store/productSlice";
import { useNavigate } from "react-router-dom";

const ProductSliderItemm = ({ code, nom, prix, img }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addProductHandler = () => {
    const productData = { code, name: nom, price: parseFloat(prix), img };

    dispatch(
      productSliceAction.addProduct({
        ...productData,
        img: `http://localhost:3000/img/${img}`,
      })
    );
    navigate("/");
  };

  return (
    <div className="page--search-product__product-list__item">
      <div onClick={addProductHandler}>
        <h1>{nom}</h1>
        <div>{parseFloat(prix)} $</div>
        {/* <img src={`http://localhost:3000/img/${img}`} alt={nom} /> */}
      </div>
    </div>
  );
};

export default ProductSliderItemm;
