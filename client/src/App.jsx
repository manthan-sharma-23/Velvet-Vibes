import { useContext, useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Container/Landing/Home";
import Userstate from "./Context/userState";
import Menu from "./Container/Menu/Menu";
import Login from "./Components/Register/Login";
import Signup from "./Components/Register/Signup";
import Product from "./Container/Pages/Product";
import Promos from "./Container/Promos/Promos";
import Reserve from "./Container/Reserve/Reserve";

function App() {
  const pathname = window.location.pathname;
  const checkRoute =
    pathname === "/login" || pathname === "/signup" || pathname === "/";
  return (
    <Userstate>
      <BrowserRouter>
        {checkRoute ? <></> : <Navbar />}
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/promos" element={<Promos />} />
          <Route exact path="/reserve" element={<Reserve />} />
          <Route exact path="/:category" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </Userstate>
  );
}

export default App;
