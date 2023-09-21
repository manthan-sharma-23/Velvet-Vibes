import React from "react";
import "./Review.css";
import footer_img from "../../assets/images/ambience/footer.jpg";
import TextField from "@mui/material/TextField";

const Footer = () => {
  return (
    <div id="review">
      <img src={footer_img} className="footerimg" />
      <div className="response">
        <div className="src">
          <h1 className="title">
            Welcome to <span className="logo">Velvet Vibes</span>
            <span className="nice">Prueba lo auténtico</span>
          </h1>
        </div>
        <div className="text">
          <div className="title">
            <h1>We are happy to Improve</h1>
            <h3>Please write us your review</h3>
          </div>
          <div id="form">
            <input placeholder="Enter your name" type="name" />
            <input placeholder="Enter your email (optional)" type="email" />
            <textarea placeholder="Enter your review" rows="4"></textarea>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
