import AboutUs from "../about-us";
import SearchForm from "../search-form";
import ArtistList from '../Artists/ArtistList';
import RandomArtist from "./random-artist"




const Home = () => {
    return (
        <div>
            <h1>Hello im home page</h1>
            <SearchForm/>
            <RandomArtist/>
            <ArtistList/>
            {/* <AboutUs /> */}
        </div>

    )

}

export default Home;