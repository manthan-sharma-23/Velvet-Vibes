import React from "react";
import "./Reserve.css";
import table from "../../assets/images/ambience/table.jpg";
import table2 from "../../assets/images/ambience/table2.jpg";
import table3 from "../../assets/images/ambience/table3.jpg";
import table4 from "../../assets/images/ambience/table4.jpg";

const Reserve = () => {
  const loc = window.location.pathname;
  const ambience = [table, table2, table3, table4];
  return (
    <div id="reservation">
      <h1
        style={{
          marginBottom: "20px",
          fontFamily: "Nunito, sans-serif",
          width: "100%",
          textAlign: "center",
          display: `${loc === "/" ? "" : "none"}`,
        }}
        className="gtb"
      >
        Guys Get a Table !
      </h1>
      <div className="table">
        <div className="textz">
          <h1>Hey Folks!</h1>
          <p>Tired of waiting Everytime?</p>
          <h4>Reserve your table in advance</h4>
          <button
            onClick={() => {
              window.location = "/reserve";
            }}
          >
            Reserve
          </button>
        </div>
        <div className="src">
          {ambience.map((table, index) => {
            return (
              <div className="each_img" key={index} style={{ width: "25%" }}>
                <img src={table} className="img_t" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Reserve;
