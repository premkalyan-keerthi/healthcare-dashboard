import React from "react"
import './styles.css'
import axios from 'axios'

// import searchLogo from "./images/search.png";

const PatientsInfo = () =>{
       
    return <div className="rightsidePanelContainer">
    
        <div className="rightheadingBlock">
        <img className="jessica" src="/images/jessica.png" alt="jessica"/>
        <h2 className="cardName">Jessica Taylor</h2>
        </div>
        <div>
        <div className="cardInner">
                <img className="profileImg" src="/images/calendar.png" alt="calender" />
                <div>
                    <span className="cardName">Date Of Birth</span>
                    <h5>August 23, 1996</h5>
                </div>
            </div>
        </div>
        <div className="cardInner">
          <img className="profileImg" src="/images/FemaleIcon.png" alt="gender" />
          <div>
            <span className="cardName">Gender</span>
            <h5>Female</h5>
          </div>
        </div>
        <div className="cardInner">
          <img className="profileImg" src="/images/PhoneIcon.svg" alt="phone" />
          <div>
            <span className="cardName">Contact Info.</span>
            <h5>(415) 555-1234</h5>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="cardInner">
          <img className="profileImg" src="/images/PhoneIcon.svg" alt="emergency contact" />
          <div>
            <span className="cardName">Emergency Contacts</span>
            <h5>(415) 555-5678</h5>
          </div>
        </div>

        {/* Insurance Provider */}
        <div className="cardInner">
          <img className="profileImg" src="/images/InsuranceIcon.png" alt="insurance provider" />
          <div>
            <span className="cardName">Insurance Provider</span>
            <h5>Sunrise Health Assurance</h5>
          </div>
        </div>
        <button className="allInfo">Show All Information</button>
    </div>
    
}

export default PatientsInfo;