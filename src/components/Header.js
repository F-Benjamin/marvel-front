import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo-marvel.jpg";
import { useHistory } from "react-router-dom";
const Header = ({ token, setUserToken, setLogInModal }) => {
  const history = useHistory();
  return (
    <>
      <div className="header-container">
        <div>
          <Link to="/">
            <img src={Logo} alt="Logo Marvel" />
          </Link>
        </div>
        <div className="header-menu">
          <div>
            <Link to="/characteres" className="link">
              CHARACTERS
            </Link>
          </div>
          <div>
            <Link to="/comics" className="link">
              COMICS
            </Link>
          </div>
          <div>
            <Link to="/myfavs" className="link">
              MY FAVS
            </Link>
          </div>
        </div>
        <div className="header-button">
          {token ? (
            <>
              <Link
                className="red-link"
                onClick={() => {
                  setUserToken(null);
                  history.push("/");
                }}
              >
                LOGOUT
              </Link>
            </>
          ) : (
            <>
              <Link
                className="red-link"
                onClick={() => {
                  setLogInModal(true);
                }}
              >
                LOGIN
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
