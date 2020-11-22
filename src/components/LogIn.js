import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const LogIn = ({ setUserToken, setLogInModal, setsignInModal }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      "https://marvel-backend-bf.herokuapp.com/user/login",
      {
        email: email,
        password: password,
      }
    );

    const newCookie = response.data.token;
    if (newCookie) {
      setUserToken(newCookie);
      setLogInModal(false);
    } else {
      alert("Les informations ne sont pas correcte, veuillez ré-essayer");
    }
  };

  return (
    <>
      <div className="login-container">
        <h2>Login</h2>
        <form className="signin-form" onSubmit={handleSubmit}>
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
          <button type="submit">Login</button>
        </form>
        <Link
          className="form-link"
          onClick={() => {
            setLogInModal(false);
            setsignInModal(true);
          }}
        >
          No account yet ? Sign In !
        </Link>
        <button
          className="login-button"
          onClick={() => {
            setLogInModal(false);
          }}
        >
          Back
        </button>
      </div>
    </>
  );
};

export default LogIn;
