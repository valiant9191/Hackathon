import React, { useContext } from 'react';
import { MyContext } from './context/ContextProvider';
//import { Route, Switch } from 'react-router-dom';
//import SearchForm from './components/search-form'
import './App.css';

function App() {

  //const context = useContext(MyContext);


  return (
    <h1>
    Hello!
      {/* {context.artists && console.log(context.artists)} */}
    </h1>
    // <Switch>
    //   <Route exact path="/"
    //     render={props =>
    //       <Home {...props} />}
    //   />
    //   <Route path="/artists"
    //     render={props =>
    //       <ArtistList {...props} />}
    //   />
    //   <Route path="/about"
    //   render={props =>
    //       <AboutUs {...props} />}
    //    />
    //    <Route path="/artists/artist"
    //   render={props =>
    //       <Artist {...props} />}
    //    />
    // </Switch>
  );
}

export default App;
