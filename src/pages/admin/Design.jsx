import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { settingsActions } from "../../store/settingsSlice";

const Design = () => {
  const dispatch = useDispatch();

  return (
    <div className="page">
      <ul className="admin-nav-list">
        <Link to="/admin/general">Général</Link>
        <Link
          to="/admin/design"
          style={{
            color: "white",
            borderBottom: "1px solid blue",
            background: "blue",
          }}
        >
          Design
        </Link>
        <Link to="/admin/imprimente">Imprimente</Link>
        <Link to="/admin/options">Options</Link>
      </ul>
      <div
        style={{
          paddingBlock: "4rem",
          display: "flex",
          gap: "5rem",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <div className="column-card">
          <div className="column-card__title">Géneral</div>
          <div className="column-card__option">
            <span>Couleur principal : </span>
            <input
              onChange={(e) => {
                const color = e.target.value;
                dispatch(
                  settingsActions.changeDesign({
                    mainColor: color,
                    secondColor: null,
                  })
                );
              }}
              type="color"
              name=""
              id=""
            />
          </div>
          <div className="column-card__option">
            <span>Couleur secondaire : </span>
            <input type="color" name="" id="" />
          </div>
        </div>
        <div className="column-card">
          <div className="column-card__title">Ecran panier</div>
          <div className="column-card__option">
            <span>Affichage article panier</span>
            <input type="checkbox" name="" id="" />
          </div>
          <div className="column-card__option">
            <span>Image publicitaire</span>
            <input type="checkbox" name="" id="" />
          </div>
          <div className="column-card__option">
            <span>Logo</span>
            <input type="checkbox" name="" id="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
