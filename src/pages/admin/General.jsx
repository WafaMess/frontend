import React from "react";
import { Link } from "react-router-dom";

const General = () => {
  return (
    <div className="page">
      <ul className="admin-nav-list">
        <Link
          to="/admin/general"
          style={{
            color: "white",
            borderBottom: "1px solid blue",
            background: "blue",
          }}
        >
          Général
        </Link>
        <Link to="/admin/design">Design</Link>
        <Link to="/admin/imprimente">Imprimente</Link>
        <Link to="/admin/options">Options</Link>
      </ul>
      <div
        style={{
          paddingBlock: "4rem",
          display: "flex",
          gap: "5rem",
          flexWrap: "wrap",
        }}
      >
        <div className="column-card">
          <div className="column-card__title">Ecran d'acceuil</div>
          <div className="column-card__option">
            <span>ecran publicitaire </span>
            <input type="checkbox" name="" id="" />
          </div>
          <div className="column-card__option">
            <span>logo</span>
            <input type="checkbox" name="" id="" />
          </div>
          <div className="column-card__option">
            <span>langue</span>
            <input type="checkbox" name="" id="" />
          </div>
          {/* <div className="column-card__option">
            <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
            <input type="checkbox" name="" id="" />
          </div> */}
        </div>
        <div className="column-card">
          <div className="column-card__title">Led</div>
          <div className="column-card__option">
            <span>Activer</span>
            <input type="checkbox" name="" id="" />
          </div>
        </div>
        <div className="column-card">
          <div className="column-card__title">Mode de réglement</div>
          <div className="column-card__option">
            <span>Espéce</span>
            <input type="checkbox" name="" id="" />
          </div>
          <div className="column-card__option">
            <span>Carte bancaire</span>
            <input type="checkbox" name="" id="" />
          </div>
          <div className="column-card__option">
            <span>Chéque</span>
            <input type="checkbox" name="" id="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;
