import './App.css';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { SearchBar } from './SearchBarOld';
import { SearchResultList } from "./SearchResultList.js";
import { getProducts } from './api/axios';
import { useEffect } from 'react';
import SearchBar from './SearchBar';
import ListPage from './ListPage';


function App() {
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([])

// const [results, setResults] = useState([]);

useEffect(() => {
  getProducts().then(json => {
    setProducts(json)
    return json
  }).then (json => {
    setSearchResults(json)
  })
}, [])

  return (
    <div className="App">

      <>
      < SearchBar products ={ products } setSearchResults = {setSearchResults} />
      <ListPage searchResults={searchResults} />
      </>
      {/* <div className="search bar container" >
        <SearchBar  setResults={setResults} />
        <SearchResultList results={results} />

      </div> */}
    </div>
  );
}

export default App;
