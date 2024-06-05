import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NumberKeyboard from "../components/NumberKeyboard";
import axios from "axios";

//portal
import { createPortal } from "react-dom";
import Portal from "../components/Portal";
import Err from "../components/modals/Err";
import { useDispatch } from "react-redux";
import fidelitySliceActions from "../store/fidelitySlice";

const FidilityCinManual = () => {
  const [NumCin, setNumCin] = useState("");

  const [err, setErr] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setNumCinHandler = (numcin) => {
    setNumCin(numcin);
  };

  const verifyNumCin = async () => {
    try {
      const numcin = NumCin;
      console.log(`http://localhost:3000/compt_fidelite/${numcin}`);
      const fidelityRequest = await axios.get(
        `http://localhost:3000/compt_fidelite_cin/${numcin}`
      );
      console.log(fidelityRequest.data, "##########");
      const { status, data, msg } = fidelityRequest.data;

      if (status) {
        dispatch(fidelitySliceActions.add(data));
        navigate("../use");
      } else {
        setErr(msg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="page page-fidility">
      <div className="page-fidility__top">
        <div className="page-fidility__top__left">
          <img src="/fidilityPage/topleft.svg" alt="" />
        </div>
        <div className="page-fidility__top__right">
          <span>Saisir le numéro de</span>
          <span>votre carte d'identité</span>
        </div>
      </div>
      <div
        className="page-fidility__center"
        style={{
          marginBottom: "5rem",
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <NumberKeyboard
          text={"code Cin"}
          setCodePromoHandler={setNumCinHandler}
        />
      </div>
      <div style={{ display: "flex", gap: "2rem" }}>
        <Link to="/fidelite/cin" className="page-fidility__bottom">
          Retour
        </Link>

        <Link
          onClick={verifyNumCin}
          style={{ backgroundColor: "#4E4E4E", color: "white" }}
          className="page-fidility__bottom"
        >
          Valider
        </Link>
      </div>
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
  );
};

export default FidilityCinManual;
