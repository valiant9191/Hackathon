import './PersonInfo.css';

const PersonInfo = ({id, name, nationality, description, biography, birth_year, artworks }) => {
    return (
        <div className="person_wrap" id={id}>
            <div className="inner_wrap">
                <div className="person_img">
                    <img src={artworks} alt={name}/>
                </div>
                <div className="person-description">
                   <p className="descrip">{nationality}</p>
                   <p className="descrip">{description}</p>
                   <p className="descrip">{biography}</p>
                   <p className="descrip">{birth_year}</p>
                </div>
            </div>
        </div>
    )
}

export default PersonInfo;