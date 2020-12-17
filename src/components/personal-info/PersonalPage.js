import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../context/ContextProvider';
import ButtonWrap from './buttuns';
import PersonInfo from './person-card';

import Slider from './slider/Slider';

import './PersonalPage.css';

import Modal from "react-modal";

Modal.setAppElement("#root");




const PersonalPage = () => {

    const context = useContext(MyContext);

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
        console.log('works')
    }

    //const [state, setState] = useState('');

    const person = context.artists[0];

    // const getData = () => {
    //         axios
    //             .get(`https://openaccess-api.clevelandart.org/api/artworks/?q=${person.name}&skip=2&limit=1&indent=1`)
    //             .then(data => {
    //                 setState(data.data)
    //                 console.log(state)
    //             })
    // }

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
            <div className="slider_wrap">
                <Slider />
                <ButtonWrap
                    action={toggleModal}
                />
            </div>
            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
            >
                <div>My modal dialog.</div>
                <button onClick={toggleModal}>Close modal</button>
            </Modal>
        </div>
    )
}

export default PersonalPage;