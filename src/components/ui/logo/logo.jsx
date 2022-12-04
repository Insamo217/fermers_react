import React from "react";
import logo from "assets/logo.png";
import "./logo.css";

export function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="" />
      <p>Фермерские продукты</p>
    </div>
  );
}
