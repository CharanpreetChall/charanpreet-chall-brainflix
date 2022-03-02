import './Home.scss';
import HeroVideo from '../../components/HeroVideo/HeroVideo';
import Comments from '../../components/Comments/Comments';
import Videos from '../../components/Videos/Videos';
import videoDetails from '../../data/video-details.json';
import videoListData from '../../data/videos.json';
import React from 'react';

const API_key= {
  "api_key": "fbb11fd1-b1f6-4147-a8ae-a87205ac574f"
  }

class Home extends React.Component {

  state = {
        videos: videoDetails,
        currentVideo: videoDetails[0],
        videoList: videoListData,
    }

updateHeroVideo= (videoId) => {
  const newCurrentVideo = this.state.videos.find((video) => {
    return video.id === videoId;
  })
  this.setState({currentVideo: newCurrentVideo})
}

render() {
  const { videoList, currentVideo} = this.state;

  const filteredVideo =videoList.filter((video) =>{
    return video.id !== currentVideo.id;
  })

return (
  <>
    <HeroVideo 
    image = {currentVideo.image}
    title= {currentVideo.title}
    channel= {currentVideo.channel}
    timestamp= {currentVideo.timestamp}
    views= {currentVideo.views}
    likes= {currentVideo.likes}
    description= {currentVideo.description} 
    duration= {currentVideo.duration} 
    />

    <Comments comments= {currentVideo.comments}/>

    <Videos videos ={filteredVideo}
    clickHandler= {this.updateHeroVideo}/>
  </>
)
}
}

export default Home;