import { useEffect } from "react";
import { Router, useNavigate, useParams } from "react-router-dom";
import { fetchMovieById } from "../state/movies/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import star from "../assets/icons/star.png";
import arrow from "../assets/icons/arrow.png"
export const MovieInfo = ({ label, value }) => (
  <div className="flex-col items-start justify-center mt-5">
    <p className="text-gray-300 font-normal text-sm">{label}</p>
    <p className="text-gray-200 font-bold text-sm mt-2">{value || "NA"}</p>
  </div>
);

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(fetchMovieById(id));
  }, []);
  const { movieDetails, loading, error } = useSelector((state) => state.movie);
  console.log(movieDetails)
  const handleNavigate = () => {
      navigate(-1)
  }
  return (
    <div className="flex-1 relative pb-20">
      {loading && (
        <h1 className="text-white text-3xl text-center mt-5">Loading...</h1>
      )}
      {error && (
        <h1 className="text-red-700 text-3xl text-center mt-5">
          ERROR: {error.message}
        </h1>
      )}
      <div className="w-full h-full">
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          className="w-full  h-[550px] rounded-lg object-fill"
          alt=""
        />
      </div>
      <div className="flex-col items-start justify-center mt-5 px-5">
        <h2 className="text-white text-2xl font-bold mb-2">
          {movieDetails.title}
        </h2>
        <div className="flex items-center gap-x-1 mt-2">
          <p className="text-gray-200 text-sm">
            {movieDetails?.release_date?.split("-")[0]}
          </p>
          <p className="text-gray-200 text-sm">•</p>
          <p className="text-gray-200 text-sm">{movieDetails?.runtime} mins</p>
        </div>
        <div className="flex items-center justify-start gap-x-1 mt-2">
          <img src={star} alt="" className="size-4 object-contain" />
          <p className="text-white font-bold text-sm">
            {movieDetails?.vote_average?.toFixed(1)}/10
          </p>
          <p className="text-gray-200 text-sm">
            ({movieDetails?.vote_count} votes)
          </p>
        </div>
        <MovieInfo label="Overview" value={movieDetails?.overview} />
        <MovieInfo
          label="Genres"
          value={movieDetails?.genres?.map((genre) => genre.name).join(" - ")}
        />
        <div className="flex justify-between w-1/2">
          <MovieInfo
            label="Budget"
            value={
              movieDetails?.budget
                ? `$${movieDetails.budget / 1_000_000} million`
                : null
            }
          />
          <MovieInfo
            label="revenue"
            value={
              movieDetails?.revenue
                ? `$${movieDetails?.revenue / 1_000_000}`
                : null
            }
          />
        </div>
        <MovieInfo
          label="Production Companies"
          value={movieDetails?.production_companies
            ?.map((company) => company.name)
            ?.join(" - ")}
        />
        <MovieInfo label="Release Date" value={movieDetails?.release_date} />
      </div>
      <button className="absolute bottom-0 left-0 right-0 mx-5 bg-indigo-400 rounded-lg py-3.5 flex items-center justify-center z-50 cursor-pointer"
      onClick={handleNavigate}
      >
         <img src={arrow} alt="" className="size-10 mr-1 mt-0.5 rotate-180 object-contain brightness-0 invert" />
         <p className="text-white font-semibold text-base">Go Back</p>
      </button>
    </div>
  );
};

export default MovieDetails;
