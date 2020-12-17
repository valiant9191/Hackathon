import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const MyContext = React.createContext();


const ContextProvider = (props) => {

    const _apiUrl = "https://openaccess-api.clevelandart.org/api/creators/?limit=10";

    const [artists, setArtists] = useState('');

    const [artist, setArtist] = useState('');

    const [loading, setLoading] = useState(false);

      const getData = () => {
          
          axios
          .get(_apiUrl)
          .then(data => {
            setLoading(true);
            setArtists(data.data.data);
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
