import './ActorCard.css'

export default function ActorCard({ name }) {
    return (
        <div className='actorCard backgroundImageActor' style={{backgroundImage: `url('https://picsum.photos/200')`}}>
            <h3>{name}</h3>
        </div>
    )
}