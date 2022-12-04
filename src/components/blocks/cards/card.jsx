import React from "react";
import Description from "components/ui/description/description";
import Title, { TitleSize } from "components/ui/title/title";
import "./card.css";
//import logo1 from "assets/1.png";

function Cards({ name, text, status }) {
  return (
    <>
      <p className="planka">
        {status === "natural" ? "фермерские продукты" : "магазинные продукты"}{" "}
      </p>

      <Title size={TitleSize.CARD} name={name} />
      <Description text={text} />
    </>
  );
}

export default Cards;
