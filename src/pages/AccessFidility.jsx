import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import Portal from "../components/Portal";
import Err from "../components/modals/Err";

const AccessFidility = () => {
  const [accessToFidility, setAccessToFidility] = useState({
    selected: false,
    status: null,
  });

  const [err, setErr] = useState(false);

  return (
    <div className="page page-fidility">
      <div className="page-fidility__top">
        <div className="page-fidility__top__left">
          <img src="/fidilityPage/topleft.svg" alt="" />
        </div>
        <div
          className="page-fidility__top__right"
          style={{ gap: "1rem", letterSpacing: "2px" }}
        >
          <span>Souhaitez-vous accéder</span>
          <span> à votre compte fidélité ?</span>
        </div>
      </div>
      <div
        className="page-fidility__center"
        style={{
          marginBottom: "5rem",
          width: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "3rem",
        }}
      ></div>
      <div style={{ display: "flex", gap: "5rem", marginBottom: "10rem" }}>
        <Link
          style={
            accessToFidility.selected && accessToFidility.status == 1
              ? { transform: "scale(1.05)" }
              : {}
          }
          onClick={(_) => {
            setAccessToFidility({ selected: true, status: 1 });
          }}
        >
          <img style={{ width: "15rem" }} src="/oui.svg" alt="" />
        </Link>

        <Link
          style={
            accessToFidility.selected && accessToFidility.status == 0
              ? { transform: "scale(1.05)" }
              : {}
          }
          onClick={(_) => {
            setAccessToFidility({ selected: true, status: 0 });
          }}
        >
          <img style={{ width: "15rem" }} src="/non.svg" alt="" />
        </Link>
      </div>

      <Link
        style={{
          fontSize: "2rem",
          fontWeight: "bolder",
          color: "white",
          backgroundColor: "rgb(78, 78, 78)",
          padding: "2rem 4rem",
        }}
        to={accessToFidility.status === 1 ? "./access" : "/postal"}
        onClick={(e) => {
          if (accessToFidility.selected === false) {
            e.preventDefault();
            setErr(true);
          } else {
          }
        }}
      >
        Continuer votre commande
      </Link>
      {err &&
        createPortal(
          <Portal>
            <Err
              err={"selectionner un choix "}
              onClose={setErr.bind(null, false)}
            />
          </Portal>,
          document.querySelector("#portals")
        )}
    </div>
  );
};

export default AccessFidility;
