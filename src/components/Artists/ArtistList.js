import ArtistCard from './ArtistCard';
import React, { useContext } from 'react';
import { MyContext } from '../../context/ContextProvider';



const ArtistList = () => {

    const context = useContext(MyContext);

    let newArr = [];
    newArr.push(context.artists[0], context.artists[1], context.artists[2], context.artists[3])

    const doSomeStuff = () => console.log('lalala');

    return (
        <div>
                <h1 className="creators">Creators of the week!</h1>
            <div className="ArtistList">
                {context.artists && newArr.map((item, index) => {
                    return (
                        <ArtistCard
                            id={item.id}
                            key={index}
                            name={item.name}
                            descr={item.description}
                            bio={item.biography}
                            onClick={doSomeStuff}
                        />
                    )
                })}

            </div>
        </div>
    )
}

export default ArtistList;
