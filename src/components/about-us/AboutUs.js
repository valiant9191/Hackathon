import React from 'react'
import './AboutUs.css'
import TeamCard from './team-member-card';
import  dataForTeamCard  from './team-member-card/dataForTeamCard'


const dataTeam = dataForTeamCard;

const AboutUs = () => {
    return(
    <div>
        <h1>Im About Us</h1>
        {dataTeam.map((el)=>(<TeamCard  
            title={el.name}
        />))}
    </div>
    )
}

export default AboutUs;