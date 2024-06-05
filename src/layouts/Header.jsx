import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect((_) => console.log("ok"), []);

  const setting = window.localStorage.settings
    ? JSON.parse(window.localStorage.settings)
    : null;

  const mainColor = setting ? setting.design.mainColor : null;

  return (
    <header
      style={{ backgroundColor: mainColor ? mainColor : "black" }}
      className="header"
    >
      <img onClick={(_) => navigate("/admin")} src="/Groupe 26249.svg" alt="" />
      <img src="/logo.PNG" alt="" />
    </header>
  );
};

export default Header;
