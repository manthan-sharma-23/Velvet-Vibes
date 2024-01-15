import React, { useEffect, useState } from "react";
import "./Login.css";
import bg from "../../assets/images/review/bg.jpg";
import { Link, useNavigate } from "react-router-dom";
import * as FcIcons from "react-icons/fc";
import * as FaIcons from "react-icons/fa";
import * as CgIcons from "react-icons/cg";
import { BASE_URL } from "../../config";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPass, setConfirmPass] = useState(null);

  const handleClick = () => {
    fetch(`${BASE_URL}auth/login`, {
      method: "POST",
      body: JSON.stringify({
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
          window.location = "/login";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div id="login">
      <img src={bg} className="bg" />
      <div className="container">
        <div className="lp pannel">
          <h2 className="header"> Login !</h2>
          <div className="form">
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
            <span>
              <button onClick={handleClick}>Login</button>
              <Link to="/signup">Not a User?</Link>
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
                <p>Login With Google</p>
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
                <p>Login With Facebook</p>
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

export default Login;
