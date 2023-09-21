import React from "react";
import "./Carousel.css";
import { range } from "../../Container/Menu/range";

const Carousel = ({ datass }) => {
  const data =
    datass || range.filter((card) => card.param !== window.location.pathname);

  return (
    <div id="carousel">
      <div className="scroll">
        {data.map((card, index) => {
          return (
            <div
              className="cards "
              key={index}
              onClick={() => (window.location = card.param)}
            >
              <img src={card.img} className="pin" />
              <h2 className="card_name">{card.name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
