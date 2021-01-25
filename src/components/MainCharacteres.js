import React from "react";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import imageNotFound from "../images/image_not_found.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MainCharacteres = ({
  characters,
  isLoading,
  setPage,
  pageMax,
  favCharacters,
  setFavCharacters,
}) => {
  const handlePageClick = (e) => {
    setPage(e.selected + 1);
  };

  return isLoading ? (
    <Loader
      type="Oval"
      color="#F11E21"
      height={80}
      width={80}
      className="loader"
    />
  ) : (
    <>
      <div className="container">
        <h1>DISCOVER OUR CHARACTERS</h1>
        <div className="main-container">
          {characters.results.map((heroes, index) => {
            return (
              <>
                <div key={index} className="main-list">
                  <div className="main-cards">
                    <Link className="link" to={`/characteres/${heroes.id}`}>
                      <img
                        src={
                          heroes.thumbnail.path ===
                          "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
                            ? `${imageNotFound}`
                            : `${heroes.thumbnail.path}.${heroes.thumbnail.extension}`
                        }
                        alt={heroes.name}
                      />
                    </Link>
                    <div className="cards-title">
                      <div>{heroes.name}</div>
                      <div className="cards-fav">
                        <Link
                        // onClick={() => {
                        //   const newTab = [...favCharacters];
                        //   const newFav = {
                        //     name: heroes.name,
                        //     picture:
                        //       heroes.thumbnail.path ===
                        //       "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
                        //         ? `${imageNotFound}`
                        //         : `${heroes.thumbnail.path}.${heroes.thumbnail.extension}`,
                        //     description: heroes.description,
                        //   };
                        //   newTab.push(newFav);
                        //   setFavCharacters(newTab);
                        //   console.log(newTab);
                        //   localStorage.setItem("fav", newTab);
                        // }}
                        >
                          <FontAwesomeIcon icon="star" className="fav-icon" />
                        </Link>
                      </div>
                    </div>
                    <div className="cards-description">
                      {heroes.description}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="pages">
          <ReactPaginate
            previousLabel={"PREV"}
            nextLabel={"NEXT"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageMax}
            marginPagesDisplayed={1}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </>
  );
};

export default MainCharacteres;
