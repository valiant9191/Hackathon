import ArtistCard from './ArtistCard';
import React, { useContext } from 'react';
import { MyContext } from '../../context/ContextProvider';



const Artists = () => {
    

    const context = useContext(MyContext);

    return (
        <div>
            <div className= "ArtistList">
            
            {context.artists && context.artists.map((item, index)=>{
                    return(
                       
                        <ArtistCard
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