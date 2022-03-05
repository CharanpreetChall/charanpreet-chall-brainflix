import './HeroVideo.scss';
import '../Videos/Videos'
import React from 'react';
import viewsIcon from '../../assets/Icons/views.svg';
import likesIcon from '../../assets/Icons/likes.svg';
import playIcon from '../../assets/Icons/play.svg'
import fullScreenIcon from '../../assets/Icons/fullscreen.svg';
import voulumeUpIcon from '../../assets/Icons/volume_up.svg';
import apiUtils from '../../utils/api';
import { Component } from "react";


class HeroVideo extends Component {

    state = {
        heroVideo: '',
    }

    componentDidMount() {
        this.updateHeroVideo();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.activeVideoId !== this.props.activeVideoId) {
            this.updateHeroVideo();
        }
    }

    updateHeroVideo= () => {
        const { activeVideoId } = this.props;

        apiUtils.getAll().then((response) => {
            const videos = response.data;

            const videoIndex = videos.findIndex((video) => video.id === activeVideoId);

            this.setState({
                heroVideo: videos[videoIndex]
            });
        })
    }

    // const newDate = new Date(timestamp);

    // const options = { month: '2-digit', day: '2-digit', year: 'numeric' };
    // const formattedDate = new Intl.DateTimeFormat("en-US", options).format(newDate);

render() {
    return (

        <section className="hero-video" >

            <div className="hero-video__section">
                <video className="hero-video__section-video" poster={this.state.heroVideo.image} alt={this.state.heroVideo.title}></video>
            </div>

            <div className="hero-video__controls">
                <img className="hero-video__controls-play" src={playIcon} alt={playIcon} />
                <div className="hero-video__controls-scrubber">
                    <div className="hero-video__controls-scrubber-line"></div>
                    <span className="hero-video__controls-scrubber-duration">0:00 / {this.state.heroVideo.duration}</span>
                </div>
                <div className="hero-video__controls-options">
                    <img className="hero-video__controls-options-screen" src={fullScreenIcon} alt={fullScreenIcon} />
                    <img className="hero-video__controls-options-volume" src={voulumeUpIcon} alt={voulumeUpIcon} />
                </div>
            </div>

            <div className="hero-video__details">
                <h1 className="hero-video__heading">{this.state.heroVideo.title}</h1>

                <div className="hero-video__information">

                    <h2 className="hero-video__title">By {this.state.heroVideo.channel}</h2>

                    <div className="hero-video__information-views">
                        <img className="hero-video__views-icon" src={viewsIcon} alt={this.state.heroVideo.title} />
                        <h3 className="hero-video__views-count">{this.state.heroVideo.views}</h3>
                    </div>

                    <h3 className="hero-video__information-date">{this.state.heroVideo.timestamp}</h3>
                    {/* <h3 className="hero-video__information-date">{formattedDate}</h3> */}

                    <div className="hero-video__information-likes">
                        <img className="hero-video__likes-icon" src={likesIcon} alt={this.state.heroVideo.title} />
                        <h3 className="hero-video__likes-count">{this.state.heroVideo.likes}</h3>
                    </div>

                </div>
                <div className="hero-video__description">
                    <p className="hero-video__description-paragraph">{this.state.heroVideo.description}</p>
                </div>
            </div>
        </section>

    )
}
}



export default HeroVideo;




import './HeroVideo.scss';
import '../Videos/Videos'
import React from 'react';
import viewsIcon from '../../assets/Icons/views.svg';
import likesIcon from '../../assets/Icons/likes.svg';
import playIcon from '../../assets/Icons/play.svg'
import fullScreenIcon from '../../assets/Icons/fullscreen.svg';
import voulumeUpIcon from '../../assets/Icons/volume_up.svg';


function HeroVideo({ image, title, channel, timestamp, views, likes, description, duration }) {

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
                    {/* <h3 className="hero-video__information-date">{formattedDate}</h3> */}

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
