import React, { useEffect, useState } from "react";
import "./Product.css";
import { useParams } from "react-router-dom";
import cover from "./Cover";
import Footer from "../../Components/Footer/Footer";
import Carousel from "../../Components/Carousel/Carousel";
import Display from "./Display";

const Product = () => {
  const { category } = useParams();
  const data = cover.filter((cvr) => cvr.class === category)[0];
  const [products, setProducts] = useState([]);
  let subcategory = [];

  useEffect(() => {
    fetch("http://localhost:3001/product/" + data.class)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  products.map((product) => {
    subcategory.push(product.subcategory);
  });

  subcategory = [...new Set(subcategory)];
  return (
    <div id="products">
      <div className="parallax">
        <div className={"background bg " + data.class}></div>
        <h1 className="texts">
          <span>A Festival of Worldly Flavors</span> In Our Café.
        </h1>
      </div>
      <div className="normal">
        <span className="heading_line">
          <h1 className="product_name">Menu</h1>
        </span>
        <div className="menu_product">
          <Display subcategory={subcategory} menu_name={data.class} />
        </div>
        <div className="caro">
          <Carousel data={cover} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
