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
        {/* {
            !context.loading && aya.localeCompare(el => <h1>{el.title}</h1>)
        } */}
        </div>
    )

}

export default SearchForm;