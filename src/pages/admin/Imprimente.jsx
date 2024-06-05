import React from "react";
import { Link } from "react-router-dom";

const Imprimente = () => {
  return (
    <div className="page">
      <ul className="admin-nav-list">
        <Link to="/admin/general">Général</Link>
        <Link to="/admin/design">Design</Link>
        <Link
          to="/admin/imprimente"
          style={{
            color: "white",
            borderBottom: "1px solid blue",
            background: "blue",
          }}
        >
          Imprimente
        </Link>
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
      ></div>
      <img
        style={{ width: "5rem", margin: "2rem", cursor: "pointer" }}
        src="/imprimente.png"
        alt=""
      />
    </div>
  );
};

export default Imprimente;
