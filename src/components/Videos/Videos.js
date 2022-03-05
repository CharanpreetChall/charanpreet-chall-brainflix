import './Videos.scss';
import '../HeroVideo/HeroVideo'
import { Link } from "react-router-dom";


function Videos({videos})  {
return ( 
    <section className='videos'>
        <h3 className="videos__heading">NEXT VIDEOS</h3>
    
    {videos.map((video) => {
        return (

            <Link to= {`/videos/${video.id}`} className="videos__list" >
                <div className="videos__list-item">
                    <img className="videos__list-item-image" src={video.image} alt={video.name}  />
                </div>
                <div className="videos__list-details">
                    <h4 className="video__list-details-heading">{video.title}</h4>
                    <p className="video__list-details-creator">{video.channel}</p>
                </div>
            </Link>
    )})
    }
    </section>
    )
}

export default Videos;