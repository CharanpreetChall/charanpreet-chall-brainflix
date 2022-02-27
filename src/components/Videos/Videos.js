import './Videos.scss';
import '../HeroVideo/HeroVideo'
// import videoDetails from '../../data/video-details.json'


function Videos({videos, clickHandler})  {

return ( 
    <section className='videos'>
        <h3 className="videos__heading">NEXT VIDEOS</h3>

    
    {videos.map((video) => {
        return (<div className="videos__list-item" onClick= {() => {clickHandler(video.id)}}>
                    <img className="videos__list-image" src={video.image} alt={video.name}  />
                    <h4 className="video__list-heading">{video.title}</h4>
                    <p className="video__list-creator">{video.channel}</p>
            </div>
    )})}
    </section>
    )
}

export default Videos;