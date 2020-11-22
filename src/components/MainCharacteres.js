import React from "react";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import imageNotFound from "../images/image_not_found.jpg";

const MainCharacteres = ({ characters, isLoading, setPage, pageMax }) => {
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
                  <Link className="link" to={`/characteres/${heroes.id}`}>
                    <div className="main-cards">
                      <img
                        src={
                          heroes.thumbnail.path ===
                          "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
                            ? `${imageNotFound}`
                            : `${heroes.thumbnail.path}.${heroes.thumbnail.extension}`
                        }
                        alt={heroes.name}
                      />
                      <div className="cards-title">
                        <div>{heroes.name}</div>
                      </div>
                      <div className="cards-description">
                        {heroes.description}
                      </div>
                    </div>
                  </Link>
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
