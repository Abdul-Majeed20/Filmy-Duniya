import {configureStore} from "@reduxjs/toolkit"
import movieSlice from "../state/movies/movieSlice"
export const store = configureStore({
  reducer: {
    movie: movieSlice
  }
})