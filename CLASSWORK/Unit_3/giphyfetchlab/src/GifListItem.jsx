export default function GifListItem({ gif }){
    return (
        <div key={gif.id} className='gifItem'>
            <img src={gif.images.fixed_height.url} alt={gif.title} />
            <p>{gif.title}</p>
        </div>
    )
}