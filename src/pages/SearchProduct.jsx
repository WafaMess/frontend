import React, { useState, useRef } from "react";

// axios
import axios from "axios";
import { useNavigate } from "react-router-dom";

//  keyboard
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

// slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategorieSliderItem from "../components/CategorieSliderItem";
import ProductSliderItemm from "../components/ProductSliderItemm";

// icons
import { Search } from "@material-ui/icons";

const SearchProduct = () => {
  const [productList, setProductList] = useState([]);
  const [FiltredProductList, setFiltredProductList] = useState([]);
  const [categorieList, setCategorieList] = useState([]);
  const [searchName, setSearchName] = useState("");

  const productCodeRef = useRef();

  const navigate = useNavigate();

  const settings = {
    dots: categorieList.length == 0 ? false : true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const productSliderSetting = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const searchProductHandler = async (name) => {
    try {
      const getProductRequest = await axios.get(
        `http://localhost:3000/products/${name}`
      );
      const { productList, categorieList } = getProductRequest.data;

      setProductList(productList);
      setFiltredProductList(productList);
      setCategorieList(categorieList);
    } catch (error) {
      console.log(error);
    }
  };

  const filterProductWithCategorie = (categorie) => {
    setFiltredProductList((prev) => {
      return productList.filter((p) => p.codfamille == categorie);
    });
  };

  return (
    <div className="page page--search-product">
      <div className="page--search-product__container">
        <div
          onClick={(_) => navigate("/")}
          className="page--search-product__back"
        >
          retour
        </div>
        <div className="page--search-product__title">Rechercher Produit</div>
        <div className="page--search-product__input">
          <Search style={{ fontSize: "3rem" }} />
          <input
            value={searchName}
            type="text"
            placeholder="entrer le nom du produit"
          />
        </div>
        <div className="page--search-product__categorie-list">
          <div
            className="slider-container"
            style={{ width: "60%", margin: "0 auto" }}
          >
            <Slider {...settings}>
              {categorieList.length == 0 ? (
                <></>
              ) : (
                categorieList.map((e, i) => {
                  return (
                    <CategorieSliderItem
                      key={i}
                      categorieName={e.name}
                      filterProductWithCategorieHandler={
                        filterProductWithCategorie
                      }
                    />
                  );
                })
              )}
            </Slider>
          </div>
        </div>
        <div className="page--search-product__product-list">
          <div
            className="slider-container"
            style={{ width: "60%", margin: "0 auto" }}
          >
            <Slider {...productSliderSetting}>
              {FiltredProductList.length == 0 ? (
                <></>
              ) : (
                FiltredProductList.map((e, i) => {
                  return (
                    <ProductSliderItemm
                      key={i}
                      img={e.chemin_img}
                      code={e.codepr}
                      nom={e.nompr}
                      prix={e.prixl}
                    />
                  );
                })
              )}
            </Slider>
          </div>
        </div>
        <div style={{ height: "40%" }}>
          <Keyboard
            onChange={(value) => {
              console.log(value);
              searchProductHandler(value.toUpperCase());
              setSearchName(value.toUpperCase());
            }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="page page-seach-product">
      <input ref={productCodeRef} type="text" placeholder="code product" />
      <br />
      <button onClick={searchProductHandler}>AJOUTER</button>
      <button>ANNULER</button>
    </div>
  );
};

export default SearchProduct;
