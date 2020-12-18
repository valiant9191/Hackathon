import ArtistCard from './ArtistCard';
import React, { useContext, useState } from 'react';
import { MyContext } from '../../context/ContextProvider';



const Artists = (props) => {
    const context = useContext(MyContext);

    const [person, setPerson] = useState({});

    const pickArtist = (e) => {

        const idOfArtist = e.target.id;
    
        const clickedArtist = context.artists.find(el => el.id === el[idOfArtist]);
        setPerson(clickedArtist)
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