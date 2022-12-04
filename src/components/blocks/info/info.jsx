import React from "react";
import Title from "components/ui/title/title";
import Description from "components/ui/description/description";
import "./info.css";

function Info(props) {
  return (
    <div className="info_block">
      <div className="info">
        <Title name="Магазин фермерских продуктов с доставкой" />
        <Description text="Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день до отправки заказа клиентам. Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально свежими." />
      </div>
      <div className="image">
        <img src={props.image} alt=""></img>
      </div>
    </div>
  );
}

export default Info;
