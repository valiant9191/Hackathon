import PersonalPage from "../personal-info/PersonalPage";
import SearchForm from "../search-form";
import RandomArtist from "./random-artist"

const Home = () => {
    return (
        <div>
            <h1>Hello im home page</h1>
            <PersonalPage/>
            <SearchForm/>
            <RandomArtist/>
        </div>

    )

}

export default Home;