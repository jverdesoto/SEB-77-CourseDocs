import { useParams } from 'react-router-dom'
import { movies } from '../data'
import "./MovieDetailPage.css"

export default function MovieDetailPage() {
    let { movieName } = useParams()

    const movie = movies.find((m) => m.title === movieName)

    const { title, releaseDate, posterPath, cast} = movie
    
    
    return (
        <div>
            <div className="movieDetails">
                <h2>{title}</h2>
                <p>Release Date: {releaseDate}</p>
                <h3>Cast:</h3>
                <ul>
                    {cast.map((actor, index) => (
                        <li key={index}>{actor}</li>
                        ))}
                </ul>
            </div>
            <img src={posterPath} alt={title} className='moviePoster' />
        </div>
    )
}