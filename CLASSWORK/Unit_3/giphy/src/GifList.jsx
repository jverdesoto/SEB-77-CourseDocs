import GifListItem from './GifListItem'

export default function GifList({giphy}) {
    if (!giphy || !giphy.data) {
        return null;
    }

    return (
        <div class="container d-flex flex-row flex-wrap justify-content-center align-items-center">
            {giphy.data.map((gif) => (
                <GifListItem gif={gif} />
            ))} 
            
        </div>
    )
}