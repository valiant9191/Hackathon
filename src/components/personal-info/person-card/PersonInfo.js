import './PersonInfo.css';

const PersonInfo = ({id, name, nationality, description, biography, birth_year, artworks }) => {
    return (
        <div className="person_wrap" id={id}>
            <div className="inner_wrap">
                <div className="person_img">
                    <img src={artworks} alt={name}/>
                </div>
                <div className="person-description">
                   <h4 className="descrip">{nationality}</h4>
                   <h1 className="descrip">{description}</h1>
                   <p className="descrip">{biography}</p>
                   <p className="descrip">{birth_year}</p>
                </div>
            </div>
        </div>
    )
}

export default PersonInfo;