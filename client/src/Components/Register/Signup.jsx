import React, { useEffect, useState } from "react";
import "./Signup.css";
import bg from "../../assets/images/review/bg.jpg";
import { Link, useNavigate } from "react-router-dom";
import * as FcIcons from "react-icons/fc";
import * as FaIcons from "react-icons/fa";
import * as CgIcons from "react-icons/cg";
import { BASE_URL } from "../../config";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPass, setConfirmPass] = useState(null);

  const handleClick = () => {
    if (password) {
      fetch(`${BASE_URL}auth/signup`, {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.token) {
            alert(data.message);
            localStorage.setItem("token", data.token);
            window.location = "/";
          } else {
            alert(data.message);
            window.location = "/signup";
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Password cannot be empty");
    }
  };

  return (
    <div id="signup">
      <img src={bg} className="bg" />
      <div className="container">
        <div className="lp pannel">
          <h2 className="header"> Sign Up !</h2>
          <div className="form">
            <input
              type="text"
              placeholder="Enter your Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="email"
              placeholder="Enter your Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Confirm your password"
              onChange={(e) => {
                setConfirmPass(e.target.value);
              }}
            />
            <p
              style={{
                color: `${
                  password === confirmPass ? "rgb(219, 226, 226)" : "red"
                }`,
                position: "relative",
                height: "0px",
                // border:"2px solid red"
              }}
            >
              Please Enter same password
            </p>
            <span>
              <button
                onClick={handleClick}
                className={password === confirmPass ? "" : "disabled"}
                disabled={!(password === confirmPass)}
              >
                Sign Up
              </button>
              <Link to="/login">Already a User?</Link>
            </span>
          </div>
        </div>
        <div className="line"></div>
        <div className="rp pannel">
          <div>
            <span>
              <button
                onClick={() => {
                  window.location = "/";
                }}
                className="google"
              >
                <FcIcons.FcGoogle />
                <p>Sign Up With Google</p>
              </button>
            </span>
            <span>
              <button
                onClick={() => {
                  window.location = "/";
                }}
                className="facebook"
              >
                <FaIcons.FaFacebookF />
                <p>Sign up With Facebook</p>
              </button>
            </span>
            <span>
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/");
                }}
                className="guest"
              >
                <CgIcons.CgProfile />
                <p>Continue as Guest</p>
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
