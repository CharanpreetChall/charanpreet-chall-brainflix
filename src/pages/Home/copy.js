import './Home.scss';
import HeroVideo from '../../components/HeroVideo/HeroVideo';
import Comments from '../../components/Comments/Comments';
import Videos from '../../components/Videos/Videos';
// import videoDetails from '../../data/video-details.json';
// import videoListData from '../../data/videos.json';
import React from 'react';
import axios from'axios';

const API_key= "?api_key=fbb11fd1-b1f6-4147-a8ae-a87205ac574f"

  const url= "https://project-2-api.herokuapp.com/"


class Home extends React.Component {
  state = {
    videos: [],
    currentVideo: null,
}


componentDidMount() {
    axios
    .get(`${url}videos${API_key}`)
    .then(response => {
      this.setState({videos: response.data})
      console.log(response)
    })
  }

  getVideo = (id) => {
    axios
    .get(`${url}videos/${id}${API_key}`)
    .then(response => {
      this.setState({currentVideo: response.data})
      console.log(response)
    })
  }

  
  // componentDidUpdate(prevProps) {
  //   const {videoId: prevVideoId} = prevProps.match.params;
  //   const { videoId} = this.props.match.params

  //   if (prevVideoId !== videoId) {
  //     this.getVideo(videoId);
  //   } 
  // }


render() {
  const { videos, currentVideo} = this.state;

  const filteredVideo =currentVideo
  ? this.state.videos.filter(video =>
    video.id !== currentVideo.id): videos;

return (
  <>
    <HeroVideo 
    // image = {currentVideo.image}
    // title= {currentVideo.title}
    // channel= {currentVideo.channel}
    // timestamp= {currentVideo.timestamp}
    // views= {currentVideo.views}
    // likes= {currentVideo.likes}
    // description= {currentVideo.description} 
    // duration= {currentVideo.duration} 
    />

    {/* <Comments comments= {currentVideo.comments}/> */}
    {/* <Comments/> */}

    <Videos videos ={filteredVideo}
    clickHandler= {this.getVideo}/>
    {/* <Videos videos={videos} onClick={this.getVideo}/> */}
  </>
)
}
}

export default Home;
















import './Home.scss';
import HeroVideo from '../../components/HeroVideo/HeroVideo';
import Comments from '../../components/Comments/Comments';
import Videos from '../../components/Videos/Videos';
// import videoDetails from '../../data/video-details.json';
// import videoListData from '../../data/videos.json';
import React from 'react';
import axios from'axios';

const API_key= "?api_key=fbb11fd1-b1f6-4147-a8ae-a87205ac574f"

  const url= "https://project-2-api.herokuapp.com/"


class Home extends React.Component {
  state = {
    // videos: videoDetails,
    // currentVideo: videoDetails[0],
    // videoList: [],
    videos: [],
    currentVideo: null,
}


componentDidMount() {
    axios
    .get(`${url}videos${API_key}`)
    .then(response => {
      this.setState({videos: response.data}, this.getVideo)
      console.log(response)
    })
  }

  getVideo = (videoId) => {
    axios
    .get(`${url}/videos/${this.id}`)
    .then(response => {
      this.setState({Currentvideo: response.data})
      console.log(response)
    })
  }

  componentDidUpdate(prevProps) {
    const {videoId: prevVideoId} = prevProps.match.params;
    const { videoId} = this.props.match.params

    if (prevVideoId !== videoId) {
      this.getVideo(videoId);
    } 
  }


render() {
  const { videos, currentVideo} = this.state;

  // const filteredVideo =currentVideo
  // ? this.state.videos.filter(video =>
  //   video.id !== currentVideo.id): videos;

return (
  <>
    <HeroVideo 
    // image = {currentVideo.image}
    // title= {currentVideo.title}
    // channel= {currentVideo.channel}
    // timestamp= {currentVideo.timestamp}
    // views= {currentVideo.views}
    // likes= {currentVideo.likes}
    // description= {currentVideo.description} 
    // duration= {currentVideo.duration} 
    />
{/* 
    <Comments comments= {currentVideo.comments}/> */}
    {/* <Comments/> */}

    {/* <Videos videos ={filteredVideo}
    clickHandler= {this.updateHeroVideo}/> */}
    <Videos videos={videos} onClick={this.getVideo}/>
  </>
)
}
}

export default Home;









import './Home.scss';
import HeroVideo from '../../components/HeroVideo/HeroVideo';
import Comments from '../../components/Comments/Comments';
import Videos from '../../components/Videos/Videos';
// import videoDetails from '../../data/video-details.json';
// import videoListData from '../../data/videos.json';
// import apiUtils from '../../utils/api';
import React from 'react';
// import axios from'axios';
// import { NULL } from 'sass';




class Home extends React.Component {
  state = {
    video: [],
    activeVideo: null,
    // videos: videoDetails,
    // currentVideo: videoDetails[0],
    // videoList: [],
    // currentVideo: videoList.data[0]
}


getVideo = (videoId) => {
  apiUtils
  .getVideoById(videoId)
  .then(response => {
    this.setState({video: response.data})
    console.log(response)
  })
}

  componentDidMount() {
    axios.get(`${url}videos${API_key}`)
    .then(response => {
      this.setState({videoList: response.data})
      console.log(response)
    })
  }

  componentDidUpdate(prevProps) {
    const {videoId: prevVideoId} = prevProps.match.params;
    const { videoId} = this.props.match.params

    if (prevVideoId !== videoId) {
      this.getVideo(videoId);
    } 
  }


updateHeroVideo= (videoId) => {
// second axios request and set state of active video
// anywhere I am using video Id, instead of using params vidoe Id I would have to use active video id


//   const newCurrentVideo = this.state.video.find((video) => {
//     return video.data.id === videoId;
//   })
//   this.setState({currentVideo: newCurrentVideo})
}

render() {
  // const { videoList, currentVideo} = this.state;
  const { video, currentVideo} = this.state;

  const filteredVideo =video.filter((video) =>{
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










import './Home.scss';
import HeroVideo from '../../components/HeroVideo/HeroVideo';
import Comments from '../../components/Comments/Comments';
import Videos from '../../components/Videos/Videos';
// import videoDetails from '../../data/video-details.json';
// import videoListData from '../../data/videos.json';
import React from 'react';
import axios from'axios';

const API_key= "?api_key=fbb11fd1-b1f6-4147-a8ae-a87205ac574f"

  const url= "https://project-2-api.herokuapp.com/"


class Home extends React.Component {
  state = {
    // videos: videoDetails,
    // currentVideo: videoDetails[0],
    // videoList: [],
    videos: [],
    currentVideo: null,
}

  componentDidMount() {
    axios
    .get(`${url}videos${API_key}`)
    .then(response => {
      this.setState({video: response.data}, this.fetchVideos)
      console.log(response)
    })
  }

  getVideo = (videoId) => {
    axios
    .get(`${url}/videos/${this.videos.id}`)
    .then(response => {
      this.setState({Currentvideo: response.data})
      console.log(response)
    })
  }

  componentDidUpdate(prevProps) {
    const {videoId: prevVideoId} = prevProps.match.params;
    const { videoId} = this.props.match.params

    if (prevVideoId !== videoId) {
      this.getVideo(videoId);
    } 
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