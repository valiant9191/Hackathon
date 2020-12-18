
import SearchForm from "../search-form";
import ArtistList from '../Artists/ArtistList';

const Home = () => {

    return (
        <div className="main_wrap">
            <SearchForm/>
            <ArtistList/>
        </div>

    )

}

export default Home;