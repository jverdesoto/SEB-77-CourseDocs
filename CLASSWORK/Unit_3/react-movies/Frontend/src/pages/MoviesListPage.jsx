import MovieCard from '../components/MovieCard'
import { Link } from 'react-router-dom'
import './MoviesListPage.css'

export default function MoviesListPage({ movies }) {
    return (
        <div>
            <div className='moviesList'>
                {movies.map((movie, index) => (
                    <Link key={index} to={`/movies/${movie.title}`}>
                        <MovieCard {...movie} />
                    </Link>
                ))}
            </div>
        </div>
    )
}