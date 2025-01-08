import React from "react"
import './styles.css'
import axios from 'axios'

// import searchLogo from "./images/search.png";

export const PatientsSidePanel = ({patientsData}:props) =>{
       
    return <div className="sidePanelContainer">
        <div className="headingBlock">
        <h2 className="cardName">Patients</h2>
        <img className="searchIcon" src="/images/search.png" alt="search icon"/>
        </div>
        <div className="cardBlock">
        {patientsData.map((eachInfo)=>(
            <div className="cardInner">
                <img className="profileImg" src={eachInfo.profile_picture} alt={eachInfo.name} />
                <div>
                    <h5 className="cardName">{eachInfo.name}</h5>
                    <span>{eachInfo.gender},{eachInfo.age}</span>
                </div>
                <img className="moreIcon" src="/images/more_horiz.png" alt="more-icon"/>
            </div>
        ))}
        </div>
    </div>
}