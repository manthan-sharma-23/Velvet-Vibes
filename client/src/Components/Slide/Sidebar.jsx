import React, { useContext, useState } from "react";
import "./Sidebar.css";
import userContext from "../../Context/userContext";
import { Link, useNavigate } from "react-router-dom";
import * as LuIcons from "react-icons/lu";

const Sidebar = ({ active }) => {
  const { user } = useContext(userContext);

  return (
    <div id="sidebar">
      <div className={"content " + (active ? "active" : "")}>
        <div className="links">
          <Links user={user} />
          <div className="line"></div>
          <div className="navigator">
            <div className="param">
              <Link to="/">Menu</Link>
              <Link to="/">Harvest Home</Link>
              <Link to="/">Reservations</Link>
              <Link to="/">Blog</Link>
              <Link to="/">Our Story</Link>
              <Link to="/">Contact Us</Link>
            </div>
            <div className="social">
              <i className="fa-brands fa-instagram" />
              <i className="fa-brands fa-facebook" />
              <i className="fa-solid fa-envelope" />
              <i className="fa-brands fa-linkedin-in" />
            </div>
            <div
              className={
                "logout_button " + (user.name === "" ? "inactive_button" : "")
              }
            >
              <a
                href="/login"
                onClick={() => {
                  localStorage.removeItem("token");
                }}
              >
                <LuIcons.LuLogOut />
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Links({ user }) {
  const navigate = useNavigate();

  if (!user.name) {
    return (
      <>
        <h1 className="hello">Oops Your are not a user</h1>
        <div className="line"></div>
        <div className="linkz unactive">
          <div>
            <button
              onClick={() => {
                window.location = "/login";
              }}
            >
              Login
            </button>
            <button
              onClick={() => {
                window.location = "/signup";
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <h1 className="hello">Hello {user.name.split(" ")[0]}</h1>
      <div className="line"></div>
      <div className="linkz">
        <span>
          <Link to="/cart">
            <i className="fa-solid fa-basket-shopping" />
            <span> Your Cart</span>
          </Link>
        </span>
        <span>
          <Link to="/order">
            <i className="fa-solid fa-receipt" />
            <span> Your Orders</span>
          </Link>
        </span>
        <span>
          <Link to="/favourites">
            <i className="fa-solid fa-heart" /> <span>Your Favourites</span>
          </Link>
        </span>
      </div>
    </>
  );
}

export default Sidebar;
