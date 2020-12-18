import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../context/ContextProvider';
import ButtonWrap from './buttuns';
import PersonInfo from './person-card';

import Slider from './slider/Slider';

import './PersonalPage.css';

import Modal from "react-modal";
import ModalForm from './modal-form';
import StripeCheckoutButton from './modal-form/payment';

Modal.setAppElement("#root");

const PersonalPage = () => {

    const [isOpen, setIsOpen] = useState(false)

    const context = useContext(MyContext);

    const toggleModal = () => {
        console.log('lalalalala')
        setIsOpen(!isOpen);
    }

    //const [state, setState] = useState('');

    //const person = context.artists[0];

    // const getData = () => {
    //         axios
    //             .get(`https://openaccess-api.clevelandart.org/api/artworks/?q=${person.name}&skip=2&limit=1&indent=1`)
    //             .then(data => {
    //                 setState(data.data)
    //                 console.log(state)
    //             })
    // }
    const pics = [
        "https://images.theconversation.com/files/256856/original/file-20190201-75085-1mor4cs.png?ixlib=rb-1.1.0&rect=3%2C23%2C477%2C533&q=45&auto=format&w=926&fit=clip",
        "https://upload.wikimedia.org/wikipedia/commons/5/5e/Miguel_%C3%81ngel%2C_por_Daniele_da_Volterra_%28detalle%29.jpg",
        "https://renaissanceartists1.weebly.com/uploads/2/8/6/4/28647457/7030401.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrQyQH8sw3nRzdhCuQXC-Sj5qWdMhgoT12Dw&usqp=CAU",
        "https://cdn.gallerix.asia/sr/B/1332529164/39117993.jpg",
        "https://www.florencecity.it/wp-content/uploads/2018/10/Filippo-Brunelleschi.jpg",
        "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY1NzMzNzE5MTI5MjA0NjU5/portrait-of-michelangelo-merisi-da-caravaggio-17th-century-found-in-the-collection-of-national-museum-of-western-art-tokyo-photo-by-fine-art-imagesheritage-imagesgetty-images.jpg",
        "https://www.biography.com/.image/t_share/MTE5NTU2MzE2NjQyOTY5MDk5/titian-21322389-1-402.jpg",
        "https://i.pinimg.com/originals/e9/29/ee/e929ee8c7e221ebf23774cb6b2c085ea.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/2/22/Giorgio_Vasari_Selbstportr%C3%A4t.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBbg_93dbzND97lrjwnPzhp3HQZOe3RLBxBQ&usqp=CAU",
        "https://upload.wikimedia.org/wikipedia/commons/3/39/Cinque_maestri_del_rinascimento_fiorentino%2C_XVI_sec%2C_paolo_uccello.JPG",
    
    ];

    const number = Math.floor(Math.random() * 10) + 1;

    return (
        <div className="peron-page_wrap">
            {
                context.artists && <PersonInfo
                artworks={pics[number]}
                    id={context.person.id}
                    name={context.person.name}
                    nationality={context.person.nationality}
                    description={context.person.description}
                    biography={context.person.biography}
                    birth_year={context.person.birth_year}
                    
                />
            }
            <div className="slider_wrap">
            <h1>See examples of work</h1>
                <Slider />
                <h1>$$ 100 $$ dinar per hour</h1>
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
                <ModalForm onClose={toggleModal}>
                    <button onClick={toggleModal}>Close modal</button>
                </ModalForm>
            </Modal>
        </div>
    )
}

export default PersonalPage;