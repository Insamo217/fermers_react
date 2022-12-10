import React from "react";
import Info from "components/blocks/info/info";
import info_logo from "assets/info.png";
import Cards from "components/blocks/cards/card";
import Button from "components/ui/button/button";
import Title, { TitleSize } from "components/ui/title/title";
import styled from "styled-components";

export const CardStatus = {
  Natural: "natural",
  Magazine: "magazine",
};

const Container = styled.div`
  max-width: 1080px;
  margin: auto;
`;

function Main({ items }) {
  return (
    <>
      <section className="main">
        <div className="info_container">
          <Container>
            <Info image={info_logo} />
          </Container>
        </div>
        <Container>
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
        </Container>
      </section>
    </>
  );
}

export default Main;
