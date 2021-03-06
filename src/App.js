import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookie from "js-cookie";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import Comics from "./containers/Comics";
import Characteres from "./containers/Characteres";
import MyFavs from "./containers/MyFavs";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes, faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faTimes, faStar);

function App() {
  const [token, setToken] = useState(Cookie.get("token") || null);
  const [signInModal, setsignInModal] = useState(false);
  const [logInModal, setLogInModal] = useState(false);
  const [favCharacters, setFavCharacters] = useState([]);

  const localFav = localStorage.getItem("fav");
  console.log(localFav);

  const setUserToken = (newToken) => {
    if (newToken) {
      Cookie.set("token", newToken, { expires: 1 });
      setToken(newToken);
    } else {
      Cookie.remove("token");
      setToken(null);
    }
  };

  return (
    <>
      <Router>
        <Header
          token={token}
          setUserToken={setUserToken}
          setsignInModal={setsignInModal}
          setLogInModal={setLogInModal}
        />
        <Switch>
          <Route path="/myfavs">
            <MyFavs
              token={token}
              favCharacters={favCharacters}
              setFavCharacters={setFavCharacters}
            />
          </Route>
          <Route path="/comics">
            <Comics
              token={token}
              setUserToken={setUserToken}
              setsignInModal={setsignInModal}
              signInModal={signInModal}
              logInModal={logInModal}
              setLogInModal={setLogInModal}
            />
          </Route>
          <Route path="/characteres/:id">
            <Characteres
              token={token}
              setUserToken={setUserToken}
              setsignInModal={setsignInModal}
              signInModal={signInModal}
              logInModal={logInModal}
              setLogInModal={setLogInModal}
            />
          </Route>
          <Route path="/">
            <Home
              token={token}
              setUserToken={setUserToken}
              setsignInModal={setsignInModal}
              signInModal={signInModal}
              logInModal={logInModal}
              setLogInModal={setLogInModal}
              favCharacters={favCharacters}
              setFavCharacters={setFavCharacters}
            />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
