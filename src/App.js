import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Comments from './components/Comments/Comments';
import CommentsSection from './components/CommentsSection/CommentsSection';
import Videos from './components/Videos/Videos';


function App() {
  return (
    <body>
      <Navigation />;
      <Hero />;
      <Comments />;
      <CommentsSection />;
      <Videos />
    </body>
  )
}

export default App;
