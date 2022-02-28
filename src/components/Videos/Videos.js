import './Videos.scss';
import '../HeroVideo/HeroVideo'


function Videos({videos, clickHandler})  {

return ( 
    <section className='videos'>
        <h3 className="videos__heading">NEXT VIDEOS</h3>
    
    {videos.map((video) => {
        return (<div className="videos__list" onClick= {() => {clickHandler(video.id)}}>
                <div className="videos__list-item">
                    <img className="videos__list-item-image" src={video.image} alt={video.name}  />
                </div>
                <div className="videos__list-details">
                    <h4 className="video__list-details-heading">{video.title}</h4>
                    <p className="video__list-details-creator">{video.channel}</p>
                </div>
            </div>
    )})}
    </section>
    )
}

export default Videos;