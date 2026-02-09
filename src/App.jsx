import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./app/Home.jsx";
import Search from "./app/Search.jsx";
import Saved from "./app/Saved.jsx";
import Profile from "./app/Profile.jsx";
import MainLayout from "./Layout/MainLayout.jsx";
import MovieDetails from "./app/MovieDetails.jsx";
import Login from "./app/auth/Login.jsx"
import Register from "./app/auth/Register.jsx"
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/movie/:id" element={<MovieDetails/>}/>
        {/* Auth Routes  */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
