import React, { useContext, useEffect, useState } from "react";
import "./Navbar2.css";
import userContext from "../../Context/userContext";
import * as FaIcons from "react-icons/fa";

const Navbar2 = () => {
  const { user, cart } = useContext(userContext);

  return (
    <div id="navbar" className="navs ">
      <Second />
    </div>
  );
};

function Second() {
  if (window.innerWidth > 600) {
    return (
      <>
        <div className="logo">
          <span style={{ backgroundColor: "transparent", cursor: "pointer" }}>
            VELVET VIBES
          </span>
        </div>
        <div className="lp pannel">
          <span>
            <a href="/menu" className="navigators center">
              Menu
            </a>
          </span>
          <span>
            <a href="/promos" className="navigators center">
              Promos
            </a>
          </span>
          <span>
            <a href="/reserve" className="navigators center">
              Reservations
            </a>
          </span>
          <span>
            <a href="/" className="navigators center">
              Contact
            </a>
          </span>
        </div>
        <div className="newd">
          <div className="dots"></div>
          <FaIcons.FaLinkedinIn />
          <FaIcons.FaTwitter />
          <FaIcons.FaFacebookF />
          <FaIcons.FaInstagram />
        </div>
      </>
    );
  }
  return (
    <>
      <div className="logo">
        <span style={{ backgroundColor: "transparent", cursor: "pointer" }}>
          VELVET VIBES
        </span>
      </div>
      <div className="second">
        <div className="menu">
          <div className="bars"></div>
          <div className="bars middle"></div>
          <div className="bars"></div>
        </div>
      </div>
    </>
  );
}

export default Navbar2;
