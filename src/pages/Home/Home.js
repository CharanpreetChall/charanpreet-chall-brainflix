import './Home.scss';
import HeroVideo from '../../components/HeroVideo/HeroVideo';
import Comments from '../../components/Comments/Comments';
import Videos from '../../components/Videos/Videos';
import React from 'react';
import axios from 'axios';

const API_key = "?api_key=fbb11fd1-b1f6-4147-a8ae-a87205ac574f"
const url = "https://project-2-api.herokuapp.com/"


class Home extends React.Component {
  state = {
    videos: [],
    currentVideo: null,
  }

  componentDidMount() {
    axios
      .get(`${url}videos${API_key}`)
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
      .get(`${url}videos/${videoId}${API_key}`)
      .then(response => {
        this.setState({ currentVideo: response.data })
      }).catch(e => console.log("error"))
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getVideo(this.props.match.params.id);
    }
  }


  render() {
    const { videos, currentVideo } = this.state;

    // const videoList = currentVideo.unshift ;

    const filteredVideo = currentVideo
    ? this.state.videos.filter(video =>
      video.id !== currentVideo.id)
    : videos; 

    const videoList= filteredVideo.unshift()

    if (currentVideo === null) {
      return <p>Loading...</p>
    }
    return (
      <>
        <HeroVideo currentVideo={currentVideo}/>

        <Comments comments= {currentVideo.comments}/> 

        <Videos videos={filteredVideo}/>

      </>
    )
  }
}

export default Home;