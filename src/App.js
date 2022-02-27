import Navigation from './components/Navigation/Navigation';
import HeroVideo from './components/HeroVideo/HeroVideo';
import Comments from './components/Comments/Comments';
// import CommentsSection from './components/CommentsSection/CommentsSection';
import Videos from './components/Videos/Videos';
import videoDetails from './data/video-details.json';
// import videoListData from './data/videos.json';
import React from 'react';


class App extends React.Component {

  state = {
        videos: videoDetails,
        currentVideo: videoDetails[0],
    }

updateHeroVideo= (videoId) => {
  const newCurrentVideo = this.state.videos.find((video) => {
    return video.id === videoId;
  })
  this.setState({currentVideo: newCurrentVideo})
}


render() {
  const { videos, currentVideo} = this.state;

  const filteredVideo =videos.filter((video) =>{
    return video.id !== currentVideo.id;
  })

return (
  <>
    <Navigation />

    <HeroVideo 
    image = {currentVideo.image}
    title= {currentVideo.title}
    channel= {currentVideo.channel}
    timestamp= {currentVideo.timestamp}
    views= {currentVideo.views}
    likes= {currentVideo.likes}
    description= {currentVideo.description} 
    //add duration
    />

    <Comments comments= {currentVideo.comments}/>

    <Videos videos ={filteredVideo}
    clickHandler= {this.updateHeroVideo}/>
  </>
)
}
}


export default App;
