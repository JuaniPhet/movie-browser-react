import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import SearchView from "./components/SearchView";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log(searchText + " is the searched text");

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNWU5YzYxNDBlZDYwMzJiNzBiY2I4ZWU3YmE4ZGE0ZCIsIm5iZiI6MTczMTUxODk2Ni44NTU3NTQsInN1YiI6IjY3MzRiODBhNzZhZjNhZTdiNjM4YzllYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XeIj-ms_90sC3ZCoj83iHyzVtVUbRJsrnY17iV7hDZs",
      },
    };
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSearchResults(data.results);
        // console.log(setSearchResults(data.results));
      })
      .catch((err) => console.error(err));
  }, [searchText]);

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route
          path="/search"
          element={
            <SearchView keyword={searchText} searchResults={searchResults} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
