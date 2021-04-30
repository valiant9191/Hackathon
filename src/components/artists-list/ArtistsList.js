import './ArtistsList.css';
import ArtistCard from '../Artists/ArtistCard';


const ArtistsList = ( {filteredArtists} ) => {
    return (
        <div>
        <div className= "ArtistList">
       
        {filteredArtists.loading? filteredArtists.map((item, index)=>{
                return(
                
                    <ArtistCard
                    key={index}
                    name={item.name}
                    descr={item.description}
                    bio={item.biography}
                    header
                   
                    />
                   
                )
            }) :
            <p>loading...</p>
        }
            
            </div>
   </div>
    )
}

export default ArtistsList;