import React, { useContext, useEffect, useState } from "react";
import "./Display.css";
import * as LuIcons from "react-icons/lu";
import * as FcIcons from "react-icons/fc";
import * as PiIcons from "react-icons/pi";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import _ from "lodash";
import userContext from "../../Context/userContext";
import { BASE_URL } from "../../config";

const Display = ({ subcategory, menu_name }) => {
  return (
    <div id="display_menu">
      <h3 className="menu_header">{_.capitalize(menu_name)}</h3>
      <div className="display_items">
        {subcategory.map((ec, index) => {
          return (
            <div className="each_sub" key={index}>
              <p className="subcat_menu">{_.capitalize(ec)}</p>
              <ItemList category={menu_name} subcategory={ec} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

function ItemList({ category, subcategory }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}product/` + category + "/" + subcategory)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  // const [active, setActive] = useState(false);

  return (
    <ul className="itemList_menu">
      {data.map((item, index) => {
        return <List item={item} index={index} />;
      })}
    </ul>
  );
}

function List({ item, index }) {
  let { favourites } = useContext(userContext);
  console.log(favourites);
  if (!favourites) {
    favourites = [];
  }
  const [active, setActive] = useState(false);

  useEffect(() => {
    favourites.map((fav) => {
      if (fav === item._id) {
        setActive(true);
      }
    });
  }, []);

  const handleClick = (id) => {
    const toggleActive = () => setActive((prevActive) => !prevActive);
    if (active) {
      fetch(`${BASE_URL}auth/removefavourite/` + id, {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((res) => res.json())
        .then((data) => toggleActive())
        .catch((err) => {
          console.log(err);
        });
    } else {
      fetch(`${BASE_URL}auth/favourite/` + id, {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((res) => res.json())
        .then((data) => toggleActive())
        .catch((err) => {
          console.log(err);
        });
    }
  };


  return (
    <>
      <li key={index} className="each_item_inList">
        <p>
          <AiIcons.AiOutlineArrowRight />
          {item.name}
        </p>

        <span className="icons_list_menu">
          <i
            className="fa-solid fa-circle veg"
            style={{ display: `${item.veg ? "" : "none"}` }}
          />
          <i
            className="fa-solid fa-play fa-rotate-270 nonveg"
            style={{ display: `${item.veg ? "none" : ""}` }}
          />
          <span style={{ display: `${item.veg && item.vegan ? "" : "none"}` }}>
            <LuIcons.LuVegan />
          </span>
          <span
            style={{
              display: `${
                item.rating.reduce(
                  (accumulator, currentValue) => accumulator + currentValue,
                  0
                ) /
                  item.rating.length >
                4
                  ? ""
                  : "none"
              }`,
            }}
          >
            <FcIcons.FcRating />
          </span>
        </span>
        <button
          className="favourites_display "
          onClick={() => handleClick(item._id)}
        >
          <i
            class="fa-solid fa-heart"
            style={{ color: `${active ? "red" : ""}` }}
          />
        </button>
        <span className="item_menu_price">
          <PiIcons.PiCurrencyInr />
          {item.price}
        </span>
      </li>
    </>
  );
}

export default Display;
