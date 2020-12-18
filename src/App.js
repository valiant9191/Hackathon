import React, { useContext } from 'react';
import { MyContext } from './context/ContextProvider';
import { Route, Switch, Link } from 'react-router-dom';
import SearchForm from './components/search-form'
import './App.css';
import AboutUs from './components/about-us';
import NavBar from './components/nav-bar'
import Home from './components/home/Home'
import Artists from './components/Artists/Artists'
import PersonalPage from './components/personal-info/PersonalPage'
function App() {

  //const context = useContext(MyContext);


  return (<div>
    <NavBar />
    <Switch>
      
      <Route exact path="/"
        render={props =>
          <Home {...props} />}
      />
      <Route path="/person"
        render={props =>
          <PersonalPage {...props} />}
      />
      <Route path="/about"
      render={props =>
          <AboutUs {...props} />}
       />
       <Route path="/artists/artist"
      render={props =>
          <Artists {...props} />}
       />
    </Switch>
    </div>
  );
}

export default App;
