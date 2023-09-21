import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div className="line">
        <div className="logo">
          <h1>VELVET</h1>
          <h3>VIBES</h3>
        </div>
      </div>
      <div className="content">
        <div className="text">
          <span>
            <h3>Welcome to Velvet Vibes Café</h3>
            <p className="intro">
              "Your Haven for Gluten-Free Delights. Nestled in New Delhi, India,
              our café is a cherished destination offering a range of
              gluten-free baked goods. Indulge in our exquisite selection of
              cakes, breads, and treats thoughtfully crafted for your
              enjoyment.With a dedicated focus on delivering quality and taste,
              we're here to elevate your gluten-free experience. From our
              kitchen to your plate, relish the flavors that define Velvet
              Vibes."
            </p>
          </span>
          <div className="address">
            <span>
              <h6>Location</h6>
              <p>Badli,New Delhi,India</p>
            </span>
            <span>
              <h6>Time</h6>
              <p>Daily 9a.m. - 8p.m.</p>
            </span>
          </div>
        </div>
        <div className="srcs">
          <div className="enter">
            <p className="hed">Something sweet for your inbox</p>
            <p className="letter">
              Join our mailing list for occasional news, recipes, and other
              sweet somethings.
            </p>
          </div>
          <div className="form">
            <input placeholder="Enter your name" type="text" />
            <input placeholder="Enter your email" type="email" />
            <button>Submit</button>
          </div>
          <div className="social">
            <i className="fa-brands fa-instagram" />
            <i className="fa-brands fa-facebook" />
            <i className="fa-solid fa-envelope" />
            <i className="fa-brands fa-linkedin-in" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
