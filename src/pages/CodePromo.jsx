import React, { useState } from "react";
import ReactDOM from "react-dom";

import NumberKeyboard from "../components/NumberKeyboard";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Portal from "../components/Portal";
import Err from "../components/modals/Err";
import { useDispatch } from "react-redux";
import promoSliceActions from "../store/PromoSlice";

const CodePromo = ({ setPromoDetails }) => {
  const navigate = useNavigate();

  const [setManualCode, setSetManualCode] = useState(false);
  const [codePromo, setCodePromo] = useState("");

  const [err, setErr] = useState(false);

  const dispatch = useDispatch();

  const setCodePromoHandler = (code) => {
    setCodePromo(code);
  };

  // settings handler
  const settings = window.localStorage.settings
    ? JSON.parse(window.localStorage.settings)
    : null;
  const codePromoByNum = settings
    ? settings.options.codePromoSettings.byNum
    : true;
  const codePromoByScan = settings
    ? settings.options.codePromoSettings.byScan
    : true;

  const getPromoCodeHandler = async () => {
    try {
      const getPromoCodeDetailedRequest = await axios.get(
        "http://localhost:3000/promo_code/" + codePromo
      );

      console.log(getPromoCodeDetailedRequest.data);

      if (!getPromoCodeDetailedRequest.data.status) {
        setErr(getPromoCodeDetailedRequest.data.msg);
      } else {
        const { code, discount, expiration_date } =
          getPromoCodeDetailedRequest.data.promoCodeDetails;
        // setPromoDetails({price:discount,code, expiration_date})
        dispatch(promoSliceActions.add(discount));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="page page--code-promo">
      {setManualCode && (
        <>
          <div className="page--code-promo__title">
            Veuillez saisir votre code
          </div>
          <NumberKeyboard
            text={"code promo"}
            setCodePromoHandler={setCodePromoHandler}
          />
          <div className="page--code-promo__btns">
            <button onClick={(_) => setSetManualCode(false)}>RETOUR</button>
            <button onClick={getPromoCodeHandler}>VALIDER</button>
          </div>
          {err && (
            <div
              style={{
                margin: "2rem",
                color: "red",
                fontSize: "2rem",
                fontWeight: "bolder",
                textTransform: "uppercase",
              }}
            >
              {err}
            </div>
          )}
        </>
      )}
      {!setManualCode && (
        <>
          {codePromoByScan&&
            <>
              <div className="page--code-promo__title">
                Veuillez Scanner votre Code Promo
              </div>
            </>
          }
          <img className="page--code-promo__img" src="mainPage/offer.svg" />
          <div style={{ gap: "5rem" }} className="page--code-promo__btns">
            <button
              style={{ width: "22rem", fontSize: "2rem", opacity: "0.7" }}
              onClick={navigate.bind(null, "/")}
            >
              Ignorer
            </button>
            {codePromoByNum && (
              <button
                style={{ width: "22rem", fontSize: "2rem", opacity: "0.7" }}
                onClick={(_) => setSetManualCode(true)}
              >
                Saisir manuelle
              </button>
            )}
          </div>
        </>
      )}
      {err &&
        ReactDOM.createPortal(
          <Portal>
            <Err
              onClose={(_) => {
                setErr(false);
              }}
              err={err}
            />
          </Portal>,
          document.querySelector("#portals")
        )}
    </div>
  );
};

export default CodePromo;
