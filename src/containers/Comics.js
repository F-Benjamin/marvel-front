import React, { useEffect, useState } from "react";
import axios from "axios";
import MainComics from "../components/MainComics";
import SearchBarComics from "../components/SearchBarComics";
import SignIn from "../components/SignIn";
import LogIn from "../components/LogIn";

const Comics = ({
  token,
  signInModal,
  setsignInModal,
  logInModal,
  setLogInModal,
  setUserToken,
}) => {
  const [comics, setComics] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [pageMax, setPageMax] = useState(0);
  const [page, setPage] = useState(1);
  const [searchComics, setSearchComics] = useState("");

  try {
    const fetchData = async () => {
      const response = await axios.get(
        `https://marvel-backend-bf.herokuapp.com/comics?page=${page}&comicsTitle=${searchComics}`
      );

      setComics(response.data.data);
      setPageMax(Math.ceil(Number(response.data.data.total) / 100));

      setIsLoading(false);
    };

    useEffect(() => {
      fetchData();
    }, [page, searchComics]);
  } catch (error) {
    console.log(error.message);
  }

  return (
    <>
      <div className="home">
        <SearchBarComics
          searchComics={searchComics}
          setSearchComics={setSearchComics}
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
        <MainComics
          isLoading={isLoading}
          comics={comics}
          pageMax={pageMax}
          setPage={setPage}
        />
      </div>
    </>
  );
};

export default Comics;
