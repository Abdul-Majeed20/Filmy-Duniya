import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchMovies, fetchTrendingMovies } from "../state/movies/movieSlice"
import MovieCard from "../components/MovieCard"
import TrendingCard from "../components/TrendingCard"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { ClipLoader } from "react-spinners"

function Home() {
  const dispatch = useDispatch()
  const { movies, trendingMovies, loading, error } = useSelector((state) => state.movie)
  
  useEffect(() => {
    dispatch(fetchMovies())
    dispatch(fetchTrendingMovies())
  }, [dispatch])

  // Show toast notification on error
  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    }
  }, [error])

  // Loading spinner component
  const LoadingSpinner = () => (
    <div className="flex justify-center items-center h-64">
      <ClipLoader 
        color="#3B82F6" 
        loading={true} 
        size={50} 
        aria-label="Loading Spinner"
      />
      <span className="ml-3 text-white text-lg">Loading movies...</span>
    </div>
  )

  return (
    <div className='flex-1 p-4'>
      {/* Toast Container */}
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      
      {/* Trending Movies Section */}
      <div className="mb-8">
        <h2 className="text-3xl text-white font-mono mb-4">Trending Movies</h2>
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <div className="text-red-400 p-4 rounded-lg bg-red-900/20 border border-red-700/50">
            <p className="font-semibold">Failed to load trending movies</p>
            <p className="text-sm opacity-80">Please try again later</p>
          </div>
        ) : (
          <TrendingCard movies={trendingMovies} />
        )}
      </div>
      
      {/* Latest Movies Section */}
      <div>
        <h1 className="text-white font-mono text-3xl mb-5">Latest Movies</h1>
        
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <div className="text-red-400 p-6 rounded-lg bg-red-900/20 border border-red-700/50 text-center">
            <p className="font-semibold text-xl mb-2">Unable to load movies</p>
            <p className="text-sm opacity-80">Error: {error}</p>
            <button
              onClick={() => {
                dispatch(fetchMovies())
                dispatch(fetchTrendingMovies())
              }}
              className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
            >
              Retry
            </button>
          </div>
        ) : movies.length === 0 ? (
          <div className="text-center p-8">
            <p className="text-gray-400 text-lg">No movies found</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {movies.map((movie) => (
              <div key={movie.id}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Home