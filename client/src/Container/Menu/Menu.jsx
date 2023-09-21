import React from "react";
import "./Menu.css";
import { range, indian } from "./range";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Reserve from "../Landing/Reserve";

const Menu = () => {
  return (
    <>
      <div id="items">
        <div className="parallax">
          <div className="background bg"></div>
          <h1 className="texts">
            <span>A Festival of Worldly Flavors</span> In Our Café.
          </h1>
        </div>
        <div className="normal">
          <div className="buttons_meals">
            <button className="meals">Brunch</button>
            <button className="meals">Dinner</button>
            <button className="meals">Light Snack</button>
          </div>
          <div className="our_special"></div>
          <div className="meals_pallette">
            <h1 className="head_indian">Savory Flavors of India</h1>
            <Indian />
          </div>
          <div className="title">
            <p>OUR RANGES</p>
            <div className="line"></div>
          </div>
          <div className="menu">
            {range.map((item, index) => {
              return <Card key={index} item={item} />;
            })}
          </div>
          <Reserve />
        </div>
        <Footer />
      </div>
    </>
  );
};

function Card({ item }) {
  return (
    <Link to={item.param}>
      <div id="card">
        <img src={item.img} />
        <h2 className="name">{item.name}</h2>
      </div>
    </Link>
  );
}

function Indian() {
  return (
    <div className="indian_scroll">
      <button className="toggle_caro">
        <i className="fa-solid fa-chevron-left" />
      </button>
      <div className="slider_india">
        {indian.map((item, index) => {
          return (
            <div
              className="indian_card "
              key={index}
              onClick={() => (window.location = item.param)}
            >
              <img
                src={item.img}
                className={item.class ? item.class.split(" ")[0] : ""}
              />
              <h3
                className={item.class ? item.class.split(" ")[1] : "item_name"}
              >
                {item.name}
              </h3>
            </div>
          );
        })}
      </div>
      <button className="toggle_caro next">
        <i className="fa-solid fa-chevron-right" />
      </button>
    </div>
  );
}

export default Menu;
