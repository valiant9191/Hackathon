//import PersonalPage from "../personal-info/PersonalPage";
import SearchForm from "../search-form";
import ArtistList from '../Artists/ArtistList';
import RandomArtist from "./random-artist"





const Home = () => {

    return (
        <div>
            <h1>Hello im home page</h1>
            {/* <PersonalPage/> */}
            <SearchForm/>
            <RandomArtist/>
            <ArtistList/>
        </div>

    )

}

export default Home;