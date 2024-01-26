export default function GifListItem({gif}) {
    console.log(gif);
    return(
        <div className="card me-5 mb-5 text-bg-secondary border-warning text-center" style={{width: '15rem'}}>
            <img src={gif.images.preview_gif.url} className="card-img-top" alt="" style={{height: '150px', objectFit: 'cover'}}/>
            <div class="card-body ">
                <p class="card-title fs-6">{gif.title}</p>
            </div>
        </div>
    )
}