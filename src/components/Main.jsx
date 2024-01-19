import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRockResults, setPopResults, setHipHopResults } from "../redux/actions";
import AlbumCard from "./AlbumCard";

const Main = () => {
  const dispatch = useDispatch();
  const fetchResultsRock = useSelector((state) => state.fetchResultsRock);
  const fetchResultsPop = useSelector((state) => state.fetchResultsPop);
  const fetchResultsHipHop = useSelector((state) => state.fetchResultsHipHop);
  const fetchSearchResults = useSelector((state) => state.fetchSearchResults);

  const handleSection = async (artistName, setFetchResults) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName, {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          "X-RapidAPI-Key": "310c76a55emsh8e4908e6d008b9fp13de32jsn91c56dd7ec72",
        },
      });
      if (response.ok) {
        let data = await response.json();

        dispatch(setFetchResults(data.data));
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    handleSection("queen", setRockResults);
    handleSection("katy perry", setPopResults);
    handleSection("eminem", setHipHopResults);
  }, [dispatch]);

  return (
    <div className="col-12 col-md-9 offset-md-3 mainPage">
      <div className="row">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          {fetchSearchResults && (
            <div id="searchResults">
              <h2>Search Results</h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                {fetchSearchResults.map((result, index) => (
                  <React.Fragment key={index}>
                    <AlbumCard {...result} />
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {!fetchSearchResults && (
        <div>
          <div className="row">
            <div className="col-10">
              <div id="rock">
                <h2>Rock classics</h2>
                <div
                  className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                  id="rockSection"
                >
                  {fetchResultsRock &&
                    fetchResultsRock.slice(0, 4).map((result, index) => (
                      <React.Fragment key={index}>
                        <AlbumCard {...result} />
                      </React.Fragment>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <div id="pop">
                <h2>Pop Culture</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="popSection">
                  {fetchResultsPop &&
                    fetchResultsPop.slice(0, 4).map((result, index) => (
                      <React.Fragment key={index}>
                        <AlbumCard {...result} />
                      </React.Fragment>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <div id="hiphop">
                <h2>#HipHop</h2>
                <div
                  className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                  id="hipHopSection"
                >
                  {fetchResultsHipHop &&
                    fetchResultsHipHop.slice(0, 4).map((result, index) => (
                      <React.Fragment key={index}>
                        <AlbumCard {...result} />
                      </React.Fragment>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Main;
