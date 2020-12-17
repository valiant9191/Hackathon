import ModalForm from "../personal-info/modal-form";
import SearchForm from "../search-form";
import RandomArtist from "./random-artist"

const Home = () => {
    return (
        <div>
            <h1>Hello im home page</h1>
            <SearchForm/>
            <RandomArtist/>
            <ModalForm />
        </div>

    )

}

export default Home;