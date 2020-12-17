import ArtistCard from './ArtistCard';
import React, { useContext } from 'react';
import { MyContext } from '../../context/ContextProvider';



const ArtistList = () => {

    const context = useContext(MyContext);

    console.log(context.artists)


    let newArr = [];
    newArr.push(context.artists[0], context.artists[1], context.artists[2], context.artists[3])
    console.log(newArr)

    return (
        <div>
            <div className="ArtistList">

                {context.artists && newArr.map((item, index) => {
                    return (

                        <ArtistCard
                            key={index}
                            name={item.name}
                            descr={item.description}
                            bio={item.biography}


                        />

                    )
                })}

            </div>
        </div>
    )
}

export default ArtistList;




// const SearchForm = () => {

//     // const [aya, setAyasItems] = useState('');



//     // console.log(context.artists)

//     // useEffect(() => {
//     //     setAyasItems(context.artists.artworks);
//     //     console.log(aya);
//     //     console.log(context.loading);
//     // }, [])

//     return (
//         <div>
//         {/* {
//             !context.loading && aya.localeCompare(el => <h1>{el.title}</h1>)
//         } */}
//         </div>
//     )

// }

// export default SearchForm;