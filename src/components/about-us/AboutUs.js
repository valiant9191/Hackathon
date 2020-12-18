import React from 'react'
import './AboutUs.css'
import TeamCard from './team-member-card';
import  dataForTeamCard  from './team-member-card/dataForTeamCard'


const dataTeam = dataForTeamCard;

const AboutUs = () => {
    return(
    <div className='about'>    
        <h1>Im About Us</h1>
        <div className='dataTeam'>
            {dataTeam.map((el,index)=>(<TeamCard  
                key={index}
                name={el.inqusitor}
                linkGithub={el.linkGithub}
                // description={el.description}
                photo={el.photo}
            />))}
        </div>
    </div>
    )
}

export default AboutUs;