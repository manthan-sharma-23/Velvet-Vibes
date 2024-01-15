import React, { useEffect, useState } from "react";
import "./Menu.css";
import menu from "../../assets/images/menu.jpg";
import Reserve from "./Reserve";
import Review from "../../Components/Review/Review";
import Staff from "./Staff";
import Footer from "../../Components/Footer/Footer";
import { BASE_URL } from "../../config";

const Menu = () => {
  return (
    <div id="menu">
      <div className="background">
        <span>
          <img src={menu} />
        </span>
        <h2 className="text">
          <p className="one">Craft Your Ideal Dining Experience</p>
          <p className="two">Taste the Magic</p>
        </h2>
        <button
          className="explore"
          onClick={() => {
            window.location = "/menu";
          }}
        >
          Plunge In !
        </button>
      </div>
      <div className="items">
        <h1>Discover Our Latest Creations</h1>
        <NewStuff />
      </div>
      <div className="reserve">
        <Reserve />
        <div id="staff_reserve">
          <Staff />
        </div>
        <Review />
        <div className="footer_reserve">
          <Footer />
        </div>
      </div>
    </div>
  );
};

function NewStuff() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}product/newproducts`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err) => null);
  }, []);

  return (
    <div className="stuff">
      {products.map((item, index) => {
        return (
          <div className={"item " + index} key={index}>
            <img src={item.image} className="item_image" />
            {/* <i class="fa-solid fa-pepper-hot icon"/> */}
            <span className="about_item">
              <h6 className="item_name">{item.name}</h6>
              <h6 className="item_price">
                <i className="fa-solid fa-indian-rupee-sign" />
                {item.price}
              </h6>
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
