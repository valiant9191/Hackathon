import AboutUs from "../about-us";
import SearchForm from "../search-form";
import RandomArtist from "./random-artist"




const Home = () => {
    return (
        <div>
            <h1>Hello im home page</h1>
            <SearchForm/>
            <RandomArtist/>
            {/* <AboutUs /> */}
        </div>

    )

}

export default Home;