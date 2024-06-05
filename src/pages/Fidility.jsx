import React from "react";
import { Link } from "react-router-dom";

const Fidility = () => {
  // settings handler
  const settings = window.localStorage.settings
    ? JSON.parse(window.localStorage.settings)
    : null;
  const fidelityByNum = settings
    ? settings.options.fidelitySettings.byNum
    : true;
  const fidelityByPhone = settings
    ? settings.options.fidelitySettings.byPhone
    : true;

  return (
    <div className="page page-fidility">
      <div className="page-fidility__top">
        <div className="page-fidility__top__left">
          <img src="/fidilityPage/topleft.svg" alt="" />
        </div>
        <div className="page-fidility__top__right">
          <span>Veuillez choisir votre</span>
          <span>mode d'identification</span>
        </div>
      </div>
      <div className="page-fidility__center">
        {fidelityByNum && (
          <Link to="../carte">
            <img src="/fidilityPage/centerCart.svg" alt="" />
            <span>Saisir N° carte</span>
          </Link>
        )}
        {fidelityByPhone && (
          <Link to="../cin">
            <img src="/fidilityPage/centerTlf.svg" alt="" />
            <span>Saisir N° Cin</span>
          </Link>
        )}
      </div>
      <Link to="" className="page-fidility__bottom">
        retour
      </Link>
    </div>
  );
};

export default Fidility;
