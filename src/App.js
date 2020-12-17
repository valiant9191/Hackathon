import React, { useContext } from 'react';
import { MyContext } from './context/ContextProvider';
import { Route, Switch } from 'react-router-dom';
import SearchForm from './components/search-form'
import Home from './components/home';
import './App.css';
import AboutUs from './components/about-us';

function App() {

  //const context = useContext(MyContext);


  return (
    <Switch>
      <Route exact path="/"
        render={props =>
          <Home {...props} />}
      />
      {/* <Route path="/artists"
        render={props =>
          <ArtistList {...props} />}
      /> */}
      <Route path="/about"
      render={props =>
          <AboutUs {...props} />}
       />
       {/* <Route path="/artists/artist"
      render={props =>
          <Artist {...props} />}
       /> */}
    </Switch>

  );
}

export default App;
