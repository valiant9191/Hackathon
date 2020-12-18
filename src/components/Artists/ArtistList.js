import ArtistCard from './ArtistCard';
import React, { useContext } from 'react';
import { MyContext } from '../../context/ContextProvider';

export const pics = [
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

]


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
                        image={pics[index]}
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
