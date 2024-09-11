import React, { useEffect } from "react";
import Header from "./Header";
import NowPlayingMovies from "../hooks/NowPlayingMovies";
import Maincontainer from "./Maincontainer";
import SecondaryContainer from "./SecondaryContainer";
import UsePouplarMovies from "../hooks/UsePouplarMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
const Browse = () => {
  const showGptSearch = useSelector((store) => store.gptSearch.showGptSearch);
  NowPlayingMovies();
  UsePouplarMovies();

  return (
    <div>
      <Header />

      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <Maincontainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
