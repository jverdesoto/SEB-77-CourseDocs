import GifList from "./GifList"
import { useState, useEffect} from 'react'
import axios from 'axios'

export default function SearchBar(){
    const [search, setSearch] = useState("")
    const [result, setResult] = useState([])
    
    const giphyUrl = process.env.REACT_APP_GIPHY_URL
    const apiKey = process.env.REACT_APP_API_KEY

    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    const threeRandomLetters = () => {
        let first = alphabet[Math.floor(Math.random() * 26)];
        let second = alphabet[Math.floor(Math.random() * 26)];
        let third = alphabet[Math.floor(Math.random() * 26)];
        return [first, second, third].join("");
      };

    
    const handleSearchChange = (event) => {
        setSearch(event.target.value)
    }

    const fetching = () => {
        axios.get(`${giphyUrl}?q=${encodeURIComponent(search)}&api_key=${apiKey}&limit=8`)
        .then(response => {
            setResult(response.data.data)
            console.log(response.data.data)
        })
        .catch(err => {
            console.error("error getting gifs", err)
        })
    }

    const handleRandomWordClick = () => {
        const randomWord = threeRandomLetters();
        setSearch(randomWord);
      }
    
    
    useEffect(() => {  
        fetching();
        },[search, giphyUrl]);

    return (
    <div>
        <input placeholder="search" value={search} onChange={handleSearchChange}>
        </input>
        <br />
        <button onClick={handleRandomWordClick}>Random Word</button>
        <br />
        <br />
        <GifList gifs={result} />
    </div>
  )
}