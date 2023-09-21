import React from "react";
import "./Home.css";
import bg3 from "../../assets/images/cf3.jpg";
import Wrap from "./Wrap";
import Navbar2 from "../../Components/Navbar/Navbar2";

const Home = () => {
  return (
    <>
      <Navbar2 />
      <div id="home">
        <header className="top-h">
          <img src={bg3} className="background" />
          <h1 className="title">
            Welcome to <span className="logo">Velvet Vibes</span>
            <span className="nice">Prueba lo auténtico</span>
            <button
              className="explore"
              onClick={() => {
                window.location = "/menu";
              }}
            >
              {window.innerWidth > 600 ? "Find a Table" : "Explore!"}
            </button>
          </h1>
        </header>
        <section className="suit">
          <Wrap />
        </section>
      </div>
    </>
  );
};

export default Home;
