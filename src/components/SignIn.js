import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SignIn = ({ setUserToken, setsignInModal, setLogInModal }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      "https://marvel-backend-bf.herokuapp.com/user/signup",
      {
        email: email,
        username: username,
        password: password,
      }
    );

    const newCookie = response.data.token;
    if (newCookie) {
      setUserToken(newCookie);
      setsignInModal(false);
    } else {
      alert("Wrong information, please try again !");
    }
  };

  return (
    <>
      <div className="signin-container">
        <h2>Sign In</h2>

        <form className="signin-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit">Sign In</button>
        </form>
        <Link
          className="form-link"
          onClick={() => {
            setsignInModal(false);
            setLogInModal(true);
          }}
        >
          Already have an account ? Login !
        </Link>
        <button
          className="login-button"
          onClick={() => {
            setsignInModal(false);
          }}
        >
          <FontAwesomeIcon icon="times" />
        </button>
      </div>
    </>
  );
};

export default SignIn;
