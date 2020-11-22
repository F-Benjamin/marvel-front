import React from "react";
import Loader from "react-loader-spinner";

const CharacteresCard = ({ characteres, isLoading, comics }) => {
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
      {characteres.map((heroes, index) => {
        return (
          <>
            <div key={index}>
              <h1 className="card-h1">{heroes.name}</h1>
              <div className="single-container">
                <div className="charactere-card">
                  <div className="charactere-img">
                    <img
                      src={
                        heroes.thumbnail.path + "." + heroes.thumbnail.extension
                      }
                      alt={heroes.name}
                    />
                  </div>
                  <div className="charactere-info">
                    <div>{heroes.description}</div>
                    <div className="info-list">
                      <h2>Comic(s)</h2>
                      <div className="info-carousel">
                        {comics.map((comics, index) => {
                          return (
                            <div className="comics-list" key={index}>
                              <img
                                src={
                                  comics.thumbnail.path +
                                  "." +
                                  comics.thumbnail.extension
                                }
                                alt={comics.title}
                              />
                              <div>{comics.title}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default CharacteresCard;
