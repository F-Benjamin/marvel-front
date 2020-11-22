import React from "react";
import Loader from "react-loader-spinner";

import ReactPaginate from "react-paginate";

const MainComics = ({ comics, isLoading, setPage, pageMax }) => {
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
        <h1>DISCOVER OUR COMICS</h1>
        <div className="main-container">
          {comics.results.map((comics, index) => {
            return (
              <>
                <div key={index} className="main-list">
                  <div className="main-cards">
                    <img
                      src={
                        comics.thumbnail.path + "." + comics.thumbnail.extension
                      }
                      alt={comics.title}
                    />
                    <div className="cards-title">{comics.title}</div>
                    <div className="cards-description">
                      {comics.description}
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

export default MainComics;
