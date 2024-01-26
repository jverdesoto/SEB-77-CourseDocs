import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [dogs, setDogs] = useState([])

  function fetching() {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/dogs`)
  .then(response => response.data)
  .then(data => {
    setDogs(data)
  })
  }

  useEffect(fetching, [])

  return (
    <div className="App">
      { dogs.map(dog => (
        <p>{dog.name}</p>
      ))}
    </div>
  );
}

export default App;
