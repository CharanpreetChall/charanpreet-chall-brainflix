import './HeroVideo.scss';
import '../Videos/Videos'
import React from 'react';
import playIcon from '../../assets/Icons/play.svg'
import fullScreenIcon from '../../assets/Icons/fullscreen.svg';
import voulumeUpIcon from '../../assets/Icons/volume_up.svg';


function HeroVideo(props) {

    const { image, title, channel, timestamp, views, likes, description, duration } = props.currentVideo;

    const date = new Date(timestamp)
    const formattedDate = date.toLocaleDateString('en-US')

    return (

        <section className="hero" >

            <div className="hero__section">
                <video className="hero__section-video" poster={image}></video>
            </div>

            <div className="hero__controls">
                <img className="hero__play" src={playIcon} alt={playIcon} />
                <div className="hero__scrubber">
                    <div className="hero__scrubber-line"></div>
                    <span className="hero__scrubber-duration">0:00 / {duration}</span>
                </div>
                <div className="hero__options">
                    <img className="hero__options-screen" src={fullScreenIcon} alt={fullScreenIcon} />
                    <img className="hero__options-volume" src={voulumeUpIcon} alt={voulumeUpIcon} />
                </div>
            </div>

            <div className="hero__container">
                <h1 className="hero__heading">{title}</h1>

                <div className="hero__information">
                    <div className="hero__details hero__details-one">
                        <h2 className="hero__channel">By {channel}</h2>
                        <h3 className="hero__date">{formattedDate}</h3>
                    </div>
                    <div className="hero__details hero__details-two">
                        <h3 className="hero__views">{views}</h3>
                        <h3 className="hero__likes">{likes}</h3>
                    </div>
                </div>

                <div className="hero__description">
                    <p className="hero__description-paragraph">{description}</p>
                </div>
            </div>


        </section>

    )
}


export default HeroVideo;