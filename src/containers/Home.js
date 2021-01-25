import React, { useEffect, useState } from "react";
import axios from "axios";
import MainCharacteres from "../components/MainCharacteres";
import SearchBarCharacters from "../components/SearchBarCharacters";
import SignIn from "../components/SignIn";
import LogIn from "../components/LogIn";

const Home = ({
  signInModal,
  setsignInModal,
  logInModal,
  setLogInModal,
  setUserToken,
  favCharacters,
  setFavCharacters,
}) => {
  const [characters, setCharacters] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [pageMax, setPageMax] = useState(0);
  const [page, setPage] = useState(1);
  const [searchCharacter, setSearchCharacter] = useState("");

  try {
    const fetchData = async () => {
      const response = await axios.get(
        `https://marvel-backend-bf.herokuapp.com/characters?page=${page}&characterName=${searchCharacter}`
      );

      setCharacters(response.data.data);
      setPageMax(Math.ceil(Number(response.data.data.total) / 100));

      setIsLoading(false);
    };

    useEffect(() => {
      fetchData();
    }, [fetchData]);
  } catch (error) {
    console.log(error.message);
  }

  return (
    <>
      <div className="home">
        <SearchBarCharacters
          searchCharacter={searchCharacter}
          setSearchCharacter={setSearchCharacter}
        />
        <div className={signInModal ? "modal-show" : "modal-hidden"}>
          <SignIn
            setsignInModal={setsignInModal}
            setUserToken={setUserToken}
            setLogInModal={setLogInModal}
          />
        </div>
        <div className={logInModal ? "modal-show" : "modal-hidden"}>
          <LogIn
            setLogInModal={setLogInModal}
            setUserToken={setUserToken}
            setsignInModal={setsignInModal}
          />
        </div>

        <MainCharacteres
          characters={characters}
          isLoading={isLoading}
          pageMax={pageMax}
          setPage={setPage}
          favCharacters={favCharacters}
          setFavCharacters={setFavCharacters}
        />
      </div>
    </>
  );
};

export default Home;
