import SearchBar from './SearchBar'
import './App.css';
import GifList from './GifList';
import { useState } from "react"
import axios from 'axios';


function App() {
    const [giphy, setGiphy] = useState([])
    const [searchedWord, setSearchedWord] = useState('')

    function fetching() {
        axios.get(`${process.env.REACT_APP_GIPHY_API}${searchedWord}&limit=8`)
        .then(response => response.data)
        .then(data => {
        setGiphy(data)
    })
    }

  return (
    <div className="App p-5">
      <h1 className='p-3'>Giphy Search</h1>
      <p>Welcome to the Giphy Search, just enter your keyword in the search bar and get the top 8 gif's back</p>
      <SearchBar giphy={giphy} fetching={fetching} searchedWord={searchedWord} setSearchedWord={setSearchedWord}/>
      <GifList giphy={giphy}/>
    </div>
  );
}

export default App;
