import React, { useEffect } from "react";
import axios from "axios";

const Skip = ({ page, setPage, setCharacters, setIsLoading }) => {
  const pagePlus = async () => {
    setPage(100);

    const response = await axios.get(
      `http://localhost:3001/characters?skip=${page}`
    );

    setCharacters(response.data);
    setIsLoading(false);
  };
  useEffect(() => {
    pagePlus();
  }, []);

  return (
    <>
      <div>
        <button onClick={pagePlus}>+</button>
        <button
          onClick={() => {
            setPage(page - 100);
          }}
        >
          -
        </button>
      </div>
    </>
  );
};

export default Skip;
