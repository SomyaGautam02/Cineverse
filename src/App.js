import "./App.css";
import {BrowserRouter ,Routes, Route} from "react-router-dom"
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import MovieList from "./components/MovieList/MovieList";
import MovieDetails from "./components/MoviesDetails/MovieDetails";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="movies/:type" element={<MovieList/>}></Route>
          <Route path="movie/:id" element={<MovieDetails/>}></Route>
          <Route path="/*" element={<h2>Error</h2>}> </Route>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
