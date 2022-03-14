import './Home.scss';
import HeroVideo from '../../components/HeroVideo/HeroVideo';
import Comments from '../../components/Comments/Comments';
import Videos from '../../components/Videos/Videos';
import React from 'react';
import axios from 'axios';

class Home extends React.Component {
  state = {
    videos: [],
    currentVideo: {},
  }

  componentDidMount() {
    axios
      .get('/videos')
      .then(response => {
        this.setState({
          videos: response.data 
        })
        const videoId = this.props.match.params.id || response.data[0].id;
        this.getVideo(videoId);
      })
      .catch(e => console.log("error mounting on the console", e))
  }

  getVideo = (videoId) => {
    axios
      .get(`/videos/${videoId}`)
      .then(response => {
        this.setState({ currentVideo: response.data })
        window.scrollTo(0, 0)
      }).catch(e => console.log("error"))
  }

  componentDidUpdate(prevProps, prevState) {
    const videoId = this.props.match.params.id || this.state.videos[0].id;

    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getVideo(videoId);
    }
  }

  render() {
    const { videos, currentVideo } = this.state;

    const filteredVideo = currentVideo
      ? this.state.videos.filter(video =>
        video.id !== currentVideo.id)
      : videos;

    if (Object.keys(currentVideo).length === 0) {
      return <div className='loading'></div>
    }

    return (
      <>
        <HeroVideo currentVideo={currentVideo} />

        <Comments comments={currentVideo.comments} />

        <Videos videos={filteredVideo} />

      </>
    )
  }
}

export default Home;