import Navigation from './components/Navigation/Navigation';
import HeroVideo from './components/HeroVideo/HeroVideo';
import Comments from './components/Comments/Comments';
import CommentsSection from './components/CommentsSection/CommentsSection';
import Videos from './components/Videos/Videos';
import videoDetails from './data/video-details.json';
import React from 'react';


class App extends React.Component {

  state = {
        videos: videoDetails,
        selectedVideo: videoDetails[0],
    }

updateHeroVideo= (videoId) => {
  const newSelectedVideo = this.state.videos.find((video) => {
    return video.id === videoId;
  })
  this.setState({selectedVideo: newSelectedVideo})
}

// updateComments= (comment) => {
//   const newAllComments = this.state.videos.find((video) => {
//     return video.comment === comment;
// })}


render() {
  const { videos, selectedVideo} = this.state;

  const filteredVideo =videos.filter((video) =>{
    return video.id !== selectedVideo.id;
  })

return (
  <>
    <Navigation />

    <HeroVideo 
    image = {selectedVideo.image}
    title= {selectedVideo.title}
    channel= {selectedVideo.channel}
    timestamp= {selectedVideo.timestamp}
    views= {selectedVideo.views}
    likes= {selectedVideo.likes}
    description= {selectedVideo.description} 
    />

    <Comments />

    <CommentsSection comments= {selectedVideo.comments}/>

    <Videos video = {filteredVideo}/>
  </>
)
}
}


export default App;
