import './HeroVideo.scss';
import '../Videos/Videos'
import React from 'react';
import viewsIcon from '../../assets/Icons/views.svg'
import likesIcon from '../../assets/Icons/likes.svg'

function HeroVideo ({image, title, channel, timestamp, views, likes, description}) {

  return ( 

    <section className="hero-video" >

        <div className="hero-video__section">
            <img className="hero-video__video" src={image} alt={title} />
        </div>

        <div className="hero-video__details">
            <h1 className="hero-video__heading">{title}</h1>

            <div className="hero-video__information">

                <h2 className="hero-video__title">{channel}</h2>

                <div className="hero-video__information-views">
                    <img className="hero-video__views-icon" src={viewsIcon} alt={title} />
                    <h3 className="hero-video__views-count">{views}</h3>
                </div>

                <h3 className="hero-video__information-date">{timestamp}</h3>

                <div className="hero-video__information-likes">
                    <img className="hero-video__likes-icon" src={likesIcon} alt={title} />
                    <h3 className="hero-video__likes-count">{likes}</h3>
                </div>
               
            </div>
            <div className="hero-video__description">
                <p className="hero-video__description-paragraph">{description}</p>
            </div>
        </div>
    </section>
  
)
}


  export default HeroVideo;