import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import LoginPage from './LoginPage'
import MovieDetailPage from '../components/MovieDetailPage'
import ActorListPage from './ActorListPage';
import MoviesListPage from './MoviesListPage';
import NavBar from '../components/NavBar';
import { movies } from "../data.js"
import './App.css';

export default function App() {
  const [user, setUser] = useState(null)
  return (
    <div className="App">
      {user ?
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<MoviesListPage movies={movies} />}/>
            <Route path="/movies/:movieName" element={<MovieDetailPage />} />
            <Route path="/actors" element={<ActorListPage />} />
          </Routes>
        </>
          :
          <LoginPage user={user} setUser={setUser}/>
      }
    </div>
  );
}

