import { Link } from "react-router-dom";

const TrendingCard = ({ movies }) => {
  return (
    <div className="flex overflow-x-auto space-x-4 py-5 scrollbar-hide">
      {movies.map((movie) => (
        <Link
          key={movie._id}
          to={`/movie/${movie.movie_id}`}
          className="flex-shrink-0 w-42 flex flex-col"
        >
          <img
            src={movie.poster_url}
            alt={movie.movie_title}
            className="w-42 h-52 rounded-lg object-cover mb-2"
          />
          <p className="text-lg font-bold text-white line-clamp-1">
            {movie.movie_title}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default TrendingCard;
