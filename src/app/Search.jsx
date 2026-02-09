import React, { useEffect, useState } from "react";
import logo from "../assets/icons/logo.png";
import SearchBar from "../components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesBySearchTerm } from "../state/movies/movieSlice";
import MovieCard from "../components/MovieCard";
import { updateSearchCount } from "../services/api";
function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const timeOutId = setTimeout(async () => {
      if (searchQuery.trim()) {
        await dispatch(fetchMoviesBySearchTerm(searchQuery));
      }
    }, 500);
    return () => clearTimeout(timeOutId);
  }, [searchQuery]);

  const { movies, loading, error } = useSelector((state) => state.movie);

  useEffect(() => {
      if(searchQuery.trim() && movies && movies.length > 0){
        updateSearchCount(searchQuery , movies[0])
      }
  },[searchQuery])

  return (
    <div className="flex-1">
      {loading ? (
        <p className="text-2xl text-white text-center mt-5">Loading...</p>
      ) : error ? (
        <p className="text-2xl text-red font-bold text-center mt-5">
          {error.message}
        </p>
      ) : (
        <>
          <div className="flex w-full justify-center mt-20 items-center">
            <img src={logo} alt="" className="w-16 h-14" />
          </div>
          <div className="my-5">
            <SearchBar
              placeholder="Search for a Movie "
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {!loading && !error && searchQuery.trim() && movies?.length > 0 && (
            <div className="mt-5">
              <div className="flex justify-start items-center my-5">
                <h2 className="text-white text-lg font-semibold mx-2">
                  Search Result for:{" "}
                </h2>
                <p className="text-gray-300 font-bold ml-2">{searchQuery}</p>
              </div>

              <div className="grid grid-cols-3">
                {movies.map((movie) => (
                  <div key={movie.id}>
                    <MovieCard movie={movie} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
       {!loading && !error ? (
                <div className="mt-10 px-5">
                  <p className="text-gray-500 text-center">
                    {searchQuery.trim()
                      ? `${searchQuery} Not found`
                      : "Start typing to search for movies."}
                  </p>
                </div>
              ) : null}
    </div>
  );
}

export default Search;
