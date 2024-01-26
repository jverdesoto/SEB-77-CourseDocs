export default function SearchBar({setSearchedWord, searchedWord, fetching, giphy}) {
    

    function handleClick(e) {
        e.preventDefault()
        fetching()
    }


    return(
        <div className="input-group mb-3 p-3" style={{ width: '400px' }}>
            <input type="text" className="form-control" value={searchedWord}  onChange={(e) => setSearchedWord(e.target.value)}/>
            <button type="submit" className="btn btn-outline-secondary" onClick={handleClick}>Search</button>
        </div>
    )
}