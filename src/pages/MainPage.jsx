import React, { useRef, useState } from "react";
import ProductTable from "../components/ProductTable";

import { createPortal } from "react-dom";

import { Link, useNavigate } from "react-router-dom";
// redux toolkit
import { useDispatch, useSelector } from "react-redux";
import { productSliceAction } from "../store/productSlice";
import Portal from "../components/Portal";
import Err from "../components/modals/Err";
import BarcodeScanner from "../components/BarcodeScanner";
// scan code package

const MainPage = ({ promoDetails }) => {
  const navigate = useNavigate();
  const [err, setErr] = useState(false);
  const [assitance, setAssitance] = useState(false);

  // settings handler
  const settings = window.localStorage.settings
    ? JSON.parse(window.localStorage.settings)
    : null;
  const searchProduct = settings ? settings.options.rechercheArticle : true;

  // let promo = promoDetails ? promoDetails.price : 0;

  const [selectedProductCodeToDelete, setSelectedProductCodeToDelete] =
    useState(null);

  const tableContainerRef = useRef();

  const dispatch = useDispatch();
  const { list: productStore, productImg } = useSelector(
    (store) => store.productStore
  );
  const promo = useSelector((store) => store.promoStore);

  const deleteProductHanlder = () => {
    if (selectedProductCodeToDelete) {
      console.log(selectedProductCodeToDelete);
      dispatch(productSliceAction.removeProduct(selectedProductCodeToDelete));
    } else {
      alert("select product from the list !");
    }
  };

  const cancelHandler = () => {
    // dispatch(productSliceAction.cancel());
    window.location.reload();
  };

  const payerHandler = () => {
    if (productStore.length === 0) {
      setErr("votre panier est vide !");
    } else {
      navigate("/fidelite");
    }
  };

  const handleError = (err) => {
    console.error(err);
    setError("Scanning error");
  };
  const led = async (color) => {
    try {
      const response = await axios.post("http://localhost:3000/led", { color });
      console.log("LED turned on:", response.data);
    } catch (error) {
      console.error("Error turning on the LED:", error);
    }
  };

  return (
    <>
      <div className="page page-main">
        {assitance &&
          createPortal(
            <Portal>
              <Err err={assitance} onClose={setAssitance.bind(null, false)} />
            </Portal>
          )}
        <div className="page-main__left">
          <ul className="page-main__left__product-list">
            {productImg && (
              <img
                src={productImg}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            )}
          </ul>
          <div className="page-main__left__btns">
            <div
              onClick={(_) =>
                setErr(
                  "Un assistant sera disponible pour vous aider dans quelques instants. Merci de patienter."
                )
              }
              className="page-main__left__btns__btn"
            >
              <div
                className="page-main__left__btns__btn"
                onClick={() => led("red")}
              ></div>
              <img src="/mainPage/assitance.svg" alt="" />
              <span>Demande d'assistance</span>
            </div>
            <Link to="/code_promo" className="page-main__left__btns__btn">
              <img src="/mainPage/offer.svg" alt="" />
              <span>Code promo</span>
            </Link>

            <div
              onClick={deleteProductHanlder}
              className="page-main__left__btns__btn"
            >
              <img src="/mainPage/delete.svg" alt="" />
              <span>Supprimer l'article</span>
            </div>
            <div
              onClick={cancelHandler}
              style={{ borderColor: "red" }}
              className="page-main__left__btns__btn"
            >
              <img src="/mainPage/abandonner.svg" alt="" />
              <span style={{ color: "red" }}>Abandonner</span>
            </div>
            <Link
              to={searchProduct ? "/rechercher_article" : "/"}
              className="page-main__left__btns__btn"
            >
              <img src="/mainPage/compte.png" alt="" />
              <span>Rechercher article</span>
            </Link>
          </div>
        </div>
        <div className="page-main__right">
          <div ref={tableContainerRef} className="page-main__right__top">
            <ProductTable
              selectedProductCodeToDelete={selectedProductCodeToDelete}
              setSelectedProductCodeToDeleteHander={
                setSelectedProductCodeToDelete
              }
              productStore={productStore}
            />
          </div>
          <div className="page-main__right__center">
            <BarcodeScanner onError={handleError} />
            <div>
              <span
                onClick={(_) => {
                  tableContainerRef.current.scrollBy({
                    top: -30,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                ∧
              </span>
              <span
                onClick={(_) => {
                  tableContainerRef.current.scrollBy({
                    top: 30,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                ∨
              </span>
            </div>
            <div>
              <span>Quantité : {productStore.length}</span>
              <span>Remise : -{promo} &</span>
              <span>
                Tot. TTC :
                {productStore
                  .reduce((prev, current) => {
                    return parseFloat(prev + Number(current.total));
                  }, 0)
                  .toFixed(2)}{" "}
                $
              </span>
            </div>
          </div>
          <div
            onClick={payerHandler}
            className="page-main__right__bottom"
            style={{ cursor: "pointer" }}
          >
            <span>Payer</span>
            <span>
              {Number(
                productStore.reduce((prev, current, next) => {
                  return parseFloat(prev + Number(current.total));
                }, 0)
              ).toFixed(2) - promo}{" "}
              $
            </span>
          </div>
        </div>

        {/* Intégration du scanner de code-barres */}
        {err &&
          createPortal(
            <Portal>
              <Err
                err={err}
                onClose={(_) => {
                  setErr(false);
                }}
              />
            </Portal>,
            document.querySelector("#portals")
          )}
      </div>
      {/* <BarcodeScanner /> */}
    </>
  );
};

export default MainPage;
