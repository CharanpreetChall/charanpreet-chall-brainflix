import './HeroVideo.scss';
import '../Videos/Videos'
import React from 'react';
import viewsIcon from '../../assets/Icons/views.svg';
import likesIcon from '../../assets/Icons/likes.svg';
import playIcon from '../../assets/Icons/play.svg'
import fullScreenIcon from '../../assets/Icons/fullscreen.svg';
import voulumeUpIcon from '../../assets/Icons/volume_up.svg';


function HeroVideo(props) {

    const { image, title, channel, timestamp, views, likes, description, duration } = props.currentVideo;
   
    // const newDate = new Date(timestamp);

    // const options = { month: '2-digit', day: '2-digit', year: 'numeric' };
    // const formattedDate = new Intl.DateTimeFormat("en-US", options).format(newDate);


    return (

        <section className="hero-video" >

            <div className="hero-video__section">
                <video className="hero-video__section-video" poster={image} alt={title}></video>
            </div>

            <div className="hero-video__controls">
                <img className="hero-video__controls-play" src={playIcon} alt={playIcon} />
                <div className="hero-video__controls-scrubber">
                    <div className="hero-video__controls-scrubber-line"></div>
                    <span className="hero-video__controls-scrubber-duration">0:00 / {duration}</span>
                </div>
                <div className="hero-video__controls-options">
                    <img className="hero-video__controls-options-screen" src={fullScreenIcon} alt={fullScreenIcon} />
                    <img className="hero-video__controls-options-volume" src={voulumeUpIcon} alt={voulumeUpIcon} />
                </div>
            </div>

            <div className="hero-video__details">
                <h1 className="hero-video__heading">{title}</h1>

                <div className="hero-video__information">

                    <h2 className="hero-video__title">By {channel}</h2>

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