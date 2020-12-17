import './SearchForm.css';
import React, { useContext, useState, useEffect } from 'react';
import { MyContext } from '../../context/ContextProvider';

const SearchForm = () => {

    // const [aya, setAyasItems] = useState('');

    const context = useContext(MyContext);

    // console.log(context.artists)

    // useEffect(() => {
    //     setAyasItems(context.artists.artworks);
    //     console.log(aya);
    //     console.log(context.loading);
    // }, [])

    return (
        <div>
       <h1>Im search foarm component</h1>
        </div>
    )

}

export default SearchForm;