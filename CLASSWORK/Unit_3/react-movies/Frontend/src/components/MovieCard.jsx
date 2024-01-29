import './MovieCard.css'

export default function MovieCard({ posterPath, releaseDate, title }) {
    return (
        <div className='movieCard'>
            <div className='movieCardDetails' style={{backgroundImage: `url(${posterPath})`}}>
                <h3>{title}</h3>
                <p>Release Date: {releaseDate} </p>
            </div>
        </div>
    )
}