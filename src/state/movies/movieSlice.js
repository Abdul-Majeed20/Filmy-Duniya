import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMovieDetailsApi, fetchMoviesApi, getTrendingMovies } from "../../services/api";

// Async action
export const fetchMovies = createAsyncThunk("movies", async () => {
  const result = await fetchMoviesApi();
  return result;
});

export const fetchMovieById = createAsyncThunk(
  "movieDetails",
  async (movieId) => {
    const result = await fetchMovieDetailsApi(movieId);
    return result;
  },
);

export const fetchMoviesBySearchTerm = createAsyncThunk(
  "searchMoviesBySearchTerm",
  async (searchTerm) => {
    const result = await fetchMoviesApi(searchTerm);
    return result;
  },
);

export const fetchTrendingMovies = createAsyncThunk(
  "fetchTrendingMovies", async () => {
    const result = await getTrendingMovies()
    return result
  }
)

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    movieDetails: {},
    trendingMovies : [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null
        state.movies = []
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload || [];
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchMovieById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.movieDetails = {};
      })
      .addCase(fetchMovieById.fulfilled, (state, action) => {
        state.loading = false;
        state.movieDetails = action.payload || [];
      })
      .addCase(fetchMovieById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
       .addCase(fetchMoviesBySearchTerm.pending, (state) => {
        state.loading = true;
        state.error = null
        state.movies = []
      })
      .addCase(fetchMoviesBySearchTerm.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload || [];
      })
      .addCase(fetchMoviesBySearchTerm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchTrendingMovies.pending, (state) => {
        state.loading = true;
        state.error = null
        state.trendingMovies = []
      })
      .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.trendingMovies = action.payload || [];
      })
      .addCase(fetchTrendingMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});

export default movieSlice.reducer;
