import React from "react";
import "./Wrap.css";
import yoghurt from "../../assets/images/nice.jpg";
import coffee from "../../assets/images/niceeee.jpg";
import pasta from "../../assets/images/pasta.jpg";
import pizza from "../../assets/images/pizza.jpg";
import waffle from "../../assets/images/waffle.jpg";
import shakes from "../../assets/images/slide6.jpg";
import coffeegreen from "../../assets/images/cfg.jpg";
import donuts from "../../assets/images/donuts.jpg";
import fudge from "../../assets/images/iccc.jpg";
import drink from "../../assets/images/mango.jpg";
import cupcake from "../../assets/images/cupcake.jpg";
import Menu from "./Menu";

const Wrap = () => {
  const image = [
    donuts,
    coffee,
    pasta,
    drink,
    cupcake,
    yoghurt,
    coffeegreen,
    pizza,
    waffle,
    shakes,
    fudge,
  ];

  return (
    <div id="wrap">
      <div className="about">
        <div className="first">
          <div className="image"></div>
          <h2 className="tag">
            <p>ABOUT</p>
          </h2>
        </div>

        <div className="second">
          <div className="slider">
            {image.map((img, index) => {
              return <img key={index} src={img} />;
            })}
          </div>
        </div>
        <div className="third">
          <div className="para">
            <p>
              "Unlock the essence of nature in every aromatic sip. Our coffee,
              cultivated amidst lush plantations, encapsulates the truest
              flavors. From cultivation to precision roasting, each cup narrates
              an origin story, inviting you to immerse yourself in the genuine
              taste of the land. Experience the symphony of nature’s artistry
              and craftsmanship, our coffee that echoes the journey from
              plantation to your palate."
            </p>
          </div>
          <div className="images">
            <div className="img one">
              <span>
                <h1 className="text_in head">Hand Picked</h1>
                <p className="text_in paraz">By our heroes</p>
              </span>
            </div>
            <div className="img two">
              <span>
                <h1 className="text_in head">Well Roasted</h1>
                <p className="text_in paraz">With an essence of love</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div id="menu_intro">
        <Menu />
      </div>
    </div>
  );
};

export default Wrap;
