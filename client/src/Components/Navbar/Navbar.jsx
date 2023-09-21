import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import userContext from "../../Context/userContext";
import Sidebar from "../Slide/Sidebar";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

const Navbar = () => {
  const { cart, user } = useContext(userContext);
  // console.log(user.name)

  return (
    <>
      <div id="menu_bar">
        <div
          className="logo"
          onClick={() => {
            window.location = "/";
          }}
        >
          <span>
            <h2>VELVET</h2>
            <h4>VIBES</h4>
          </span>
        </div>
        <Navigation />
        <Namebar user={user} />
      </div>
      <div className="newd">
        <div className="dots"></div>
        <AiIcons.AiFillLinkedin />
        <FaIcons.FaTwitter />
        <FaIcons.FaFacebookF />
        <FaIcons.FaInstagram />
      </div>
    </>
  );
};

//Middle bar in navbar
function Navigation() {
  return (
    <div className="navigation">
      <span>
        <Link to="/menu" className="linkz">
          éat
        </Link>
      </span>
      <span>
        <Link to="/cafe" className="linkz">
          Café
        </Link>
      </span>
      <span>
        <Link to="/promos" className="linkz">
          Promos
        </Link>
      </span>
      <span>
        <Link to="/reserve" className="linkz">
          Reservations
        </Link>
      </span>
      <span>
        <Link to="/" className="linkz">
          Contact-us
        </Link>
      </span>
    </div>
  );
}

function Namebar({ user }) {
  const [sidebar, setSidebar] = useState(false);

  const sidebarState = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <div className="account">
        <span className="name">
          <Name name={user.name} />
        </span>
        <span className="logo">
          <div className="bars" onClick={sidebarState}>
            {!sidebar ? (
              <i className="fa-solid fa-bars-staggered bar_logo" />
            ) : (
              <i className="fa-solid fa-xmark close bar_logo" />
            )}
          </div>
        </span>
      </div>
      <Sidebar active={sidebar} />
    </>
  );
}

//Name Bar in navbaar
function Name({ name }) {
  if (name)
    return (
      <div className="account_info">
        <p>Hola {name.split(" ")[0]}!</p>
      </div>
    );
  return (
    <div className="account_info" style={{}}>
      Signup/Login
    </div>
  );
}

export default Navbar;
