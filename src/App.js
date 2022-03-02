import './App.scss';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import Upload from './pages/Upload/Upload';
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {

  return (

    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/upload" component={Upload} />
        //Route for selected video (updated url as per key of the video)
        <Route render={() => <h1>ERROR NOT FOUND</h1>} />
      </Switch>
    </BrowserRouter>

  )
}

export default App;
