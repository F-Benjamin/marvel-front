import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacteresCard from "../components/CharacteresCard";

import { useParams } from "react-router-dom";

const Characteres = () => {
  const [characteres, setCharacteres] = useState({});
  const [comics, setComics] = useState({});
  // const [stories, setStories] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  try {
    const fetchData = async () => {
      const response = await axios.get(
        `https://marvel-backend-bf.herokuapp.com/characters/${id}`
      );
      setCharacteres(response.data);

      const response2 = await axios.get(
        `https://marvel-backend-bf.herokuapp.com/characters/${id}/comics`
      );
      setComics(response2.data);

      // const response3 = await axios.get(
      //   `https://marvel-backend-bf.herokuapp.com/
      // characters/${id}/stories`
      // );
      // setStories(response3.data);

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
        <CharacteresCard
          characteres={characteres}
          isLoading={isLoading}
          comics={comics}
          // stories={stories}
        />
      </div>
    </>
  );
};

export default Characteres;
