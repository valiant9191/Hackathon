import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const MyContext = React.createContext();


const ContextProvider = (props) => {

    const _apiUrl = "https://openaccess-api.clevelandart.org/api/creators/?limit=10";

    const [artists, setArtists] = useState('');

    const [loading, setLoading] = useState(false);

      const getData = () => {
          setLoading(true);
          axios
          .get(_apiUrl)
          .then(data => {
       
            setArtists(data.data.data);
            setLoading(false);
            
          })
      }   


      useEffect(() => {
        getData();
      }, []);
  
      return (
          <MyContext.Provider value={{ artists, setArtists, loading, setLoading }}>
          { props.children }
          </MyContext.Provider>
      )
}

export default ContextProvider;
