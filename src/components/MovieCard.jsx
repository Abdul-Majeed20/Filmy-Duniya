import React from "react";
import { Link } from "react-router-dom";
import star from "../assets/icons/star.png";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="w-[90%] mb-4 z-50">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className="w-full h-52 rounded-lg object-fill"
        />
        <h1 className="text-white font-bold text-sm mt-2">{movie.title}</h1>
        <div className="flex items-center jusitfy-start gap-x-1">
          <img src={star} className="w-3 h-3 object-contain" alt="" />
          <p className="text-gray-300 text-xs">
            {movie.vote_average.toFixed(1)}
          </p>
        </div>
        <div className="flex flex-row justify-between items-center">
          <p className="text-gray-400 text-xs font-medium mt-1">
            {movie.release_date?.split("-")[0]}
          </p>
          <p className="text-xs font-medium text-gray-200 uppercase">MOVIE</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
