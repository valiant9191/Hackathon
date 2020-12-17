import React, { useContext, useEffect } from 'react';
import { MyContext } from '../../context/ContextProvider';
import PersonInfo from './person-card';

import './PersonalPage.css';

const PersonalPage = () => {

    const context = useContext(MyContext);


    const person = context.artists[0];

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
        </div>
    )
}

export default PersonalPage;