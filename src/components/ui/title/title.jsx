import React from "react";
import "./title.css";

export const TitleSize = {
  CARDS: "cards",
  CARD: "card",
  DEFAULT: "",
};

function Title({ name, size }) {
  return (
    <>
      <p className={`title${size ? ` title_${size}` : ""}`}>{name}</p>
    </>
  );
}

export default Title;
