import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AdminHeader = () => {
  const settingsStore = useSelector((store) => store.settings);

  const saveSettingsHandler = () => {
    window.localStorage.setItem("settings", JSON.stringify(settingsStore));
  };

  return (
    <div className="header header--admin">
      <div>
        <b>PARAMETRAGE</b>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <Link to="/home">
          <button
            style={{
              border: "none",
              padding: "2rem",
              color: "black",
              backgroundColor: "white",
              borderRadius: "1rem",
              cursor: "pointer",
            }}
            onClick={saveSettingsHandler}
          >
            <b>ENREGISTRER</b>
          </button>
        </Link>
        <Link to="/home">
          <button
            style={{
              border: "none",
              padding: "2rem",
              color: "black",
              backgroundColor: "white",
              borderRadius: "1rem",
              cursor: "pointer",
            }}
          >
            <b>Retour</b>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AdminHeader;
