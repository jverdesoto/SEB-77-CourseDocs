import { movies } from '../data.js'
import ActorCard from '../components/ActorCard'
import './ActorListPage.css'

export default function ActorListPage() {
    
    const uniqueActors = new Set()
    movies.forEach((movie) => {
        movie.cast.forEach((actor) => {
            uniqueActors.add(actor)
        })
    })

    const actorsArray = Array.from(uniqueActors)
    
    return (
        <div>
            <h1>Actors List</h1>
            <div className='actorsList'>
            {actorsArray.map((actor) => (
                <ActorCard key={actor} name={actor} />
            ))}
            </div>
        </div>
    )
}