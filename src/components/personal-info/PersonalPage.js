import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../context/ContextProvider';
import PersonInfo from './person-card';

import './PersonalPage.css';
import Slider from './slider/Slider';

const PersonalPage = () => {

    const context = useContext(MyContext);


    const person = context.artists[0];

    const [state, setState] = useState('');
    const [loading, setLoading] = useState(false);

    const getData = (name) => {
        if(context.artists) {
            axios
        .get(`https://openaccess-api.clevelandart.org/api/artworks/?q=${name}&skip=2&limit=1&indent=1`)
        .then(data => {
            setState(data.data)
            console.log(state)
        })
        }
        
    }

    const isLoaded = () => context.artists ? getData(person.name) : null;

    useEffect(() => {
        isLoaded();
    }, [state])

    return (
        <div className="peron-page_wrap">
        {
            context.artists && <PersonInfo
                id={person.id}
                name={person.name}
                nationality={person.nationality}
                description={person.description}
                biography={person.biography}
                birth_year={person.birth_year}
                artworks="https://www.mediastorehouse.com/pimage/497/13643908/13643908_450_450_81393_0_fill_0_a57bc85610830502a025d2676af7f23b.jpg"
            />
        }
        <Slider/>
        </div>
    )
}

export default PersonalPage;