import React from "react";
import { Link } from "react-router-dom";

const FidilityCin = () => {
  // settings handler
  const settings = window.localStorage.settings
    ? JSON.parse(window.localStorage.settings)
    : null;
  const fidelityByNum = settings
    ? settings.options.fidelitySettings.byNum
    : true;

  return (
    <div className="page page-fidility">
      <div className="page-fidility__top">
        <div className="page-fidility__top__left">
          <img src="/fidilityPage/topleft.svg" alt="" />
        </div>
        <div className="page-fidility__top__right">
          <span>Saisir votre</span>
          <span>Numéro de carte d'identité</span>
        </div>
      </div>
      <div className="page-fidility__center" style={{ marginBottom: "5rem" }}>
        <img
          style={{ width: "13rem" }}
          src="/fidilityPage/Tracé 20267.svg"
          alt=""
        />
      </div>
      <div style={{ display: "flex", gap: "2rem" }}>
        <Link to="/fidelite" className="page-fidility__bottom">
          Retour
        </Link>
        {fidelityByNum && (
          <Link
            style={{ backgroundColor: "#4E4E4E", color: "white" }}
            to="./manual"
            className="page-fidility__bottom"
          >
            Saisir le N° Cin
          </Link>
        )}
      </div>
    </div>
  );
};

export default FidilityCin;
