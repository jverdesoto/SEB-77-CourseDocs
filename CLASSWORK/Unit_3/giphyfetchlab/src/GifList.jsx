import GifListItem from './GifListItem'

export default function GifList({ gifs }){
    return (
    <div className='gifList'>
        {gifs.map(gif => (
            <GifListItem key={gif.id} gif={gif} />
        ))}
    </div>
    )
}