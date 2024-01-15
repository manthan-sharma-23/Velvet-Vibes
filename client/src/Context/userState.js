import React, { useEffect, useState } from "react";
import userContext from "./userContext";
import { BASE_URL } from "../config";




const Userstate = ({ children }) => {
  const [user, setUser] = useState({ name: "", email: "" });
  const [cart, setCart] = useState([]);
  const [favourites, setFavourites] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch(`${BASE_URL}auth/getuser`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      }).then((res) => res.json())
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
