import React, { useEffect, useState } from "react";

import { createContext } from "react";


const userContext = createContext();

const Userstate = ({ children }) => {
  const [user, setUser] = useState({ name: "", email: "" });
  const [cart, setCart] = useState([]);
  const [favourites, setFavourites] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:3001/auth/getuser", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUser({ name: data.name, email: data.email });
          setCart(data.cart);
          setFavourites(data.favourites);
        })
        .catch(null);
    }
  }, []);
  return (
    <userContext.Provider value={{ user, cart, favourites }}>
      {children}
    </userContext.Provider>
  );
};

export default Userstate;
