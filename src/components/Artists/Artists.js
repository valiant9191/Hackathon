import ArtistCard from './ArtistCard';
import React, { useContext, useState } from 'react';
import { MyContext } from '../../context/ContextProvider';



const Artists = (props) => {
    const context = useContext(MyContext);

    const [person, setPerson] = useState({});

    const pickArtist = (e) => {

        const idOfArtist = Number(e.target.id);
        console.log(e.target.id)
    
        const clickedArtist = context.artists.find(el => {
            return el.id === idOfArtist
        });
        setPerson(clickedArtist)
        console.log(person)
        props.history.push({
          pathname: '/person',
          person
        })
      }
    return (
        <div>
            <div className= "ArtistList">
            {context.artists && context.artists.map((item, index)=>{
                    return(
                        <ArtistCard
                        onClick={pickArtist}
                        id={item.id}
                        key={index}
                        name={item.name}
                        descr={item.description}
                        bio={item.biography}
                        header
                        />
                    )
                })}
                </div>
        </div>
    )
}

export default Artists;