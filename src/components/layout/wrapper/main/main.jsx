import React from "react";
import Info from "components/blocks/info/info";
import info_logo from "assets/info.png";
import Cards from "components/blocks/cards/card";
import Button from "components/ui/button/button";
import Title, { TitleSize } from "components/ui/title/title";
import "./main.css";

export const CardStatus = {
  Natural: "natural",
  Magazine: "magazine",
};

function Main({ items }) {
  return (
    <>
      <section className="main">
        <div className="info_container">
          <div className="container">
            <Info image={info_logo} />
          </div>
        </div>
        <div className="container">
          <Title
            size={TitleSize.CARDS}
            name="Почему фермерские продукты лучше?"
          />
          <ul className="card-list">
            {items.map((item) => (
              <li
                className={`card ${
                  item.status === "natural" ? `natural` : "market"
                }`}
                key={item.id}
              >
                <Cards {...item} />
              </li>
            ))}
          </ul>
          <Button name="Купить" />
        </div>
      </section>
    </>
  );
}

export default Main;
