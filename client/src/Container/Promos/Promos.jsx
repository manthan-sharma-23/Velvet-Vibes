import React from "react";
import "./Promos.css";
import Footer from "../../Components/Footer/Footer";
import { deals } from "./deals";
import img from "../../assets/images/cover/gmr.jpg";

const Promos = () => {
  console.log(deals);
  return (
    <div id="promo">
      <div className="parallax">
        <div className="background bg"></div>
        <h1 className="texts">
          <span>Our Delicious Deals</span> save the green leaves
        </h1>
      </div>
      <div className="normal">
        <div className="deal_header">
          <h1>Indulge in it</h1>
          <div className="background_deals">
            <img src={img} />
          </div>
        </div>
        <div className="deals">
          {deals.map((deal, index) => {
            return (
              <div
                className={
                  "each_deal " + (index % 2 !== 0 ? "row-reverse-deal" : "")
                }
                key={index}
                onClick={() => {
                  window.location = deal.href;
                }}
              >
                <span className="section_deal_img">
                  <img src={deal.img} />
                </span>
                <span className="section_deal_content">
                  <h1>{deal.name}</h1>
                  <h2>{deal.about}</h2>
                  <p>{deal.details}</p>
                  <a href="">T's & C's apply</a>
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Promos;
