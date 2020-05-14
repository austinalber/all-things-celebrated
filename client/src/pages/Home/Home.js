import React from "react";
// import { Link, Redirect } from 'react-router-dom';
// import Giphy from "../../components/Giphy"; 
import "./style.css";
// import background from "../../resources/images/background.png"

const About = props => {
  return (
    <div className="parent-div">
      <div className="top-div">
        <p style={{ fontFamily: 'Gloria Hallelujah' }}>All Things Celebrated</p>
        <p style={{ fontFamily: 'Reenie Beanie', fontSize: '30px'}}>A Lake Mary Botique</p>
      </div>
      
        <div className="bottom-div" style= {{ margin: '0 150px', lineHeight: '45px'}}>
          <h2 style={{ fontFamily: 'Gloria Hallelujah', marginBottom: '5%', marginTop: '5%'}}>Welcome!</h2>
          <p style={{ fontFamily: 'Gloria Hallelujah', fontSize: '20px'}}>
            {/* Intro letter for store */}
          </p>
            <button onClick={event => window.location.href="www.youtube.com"} className="join-btn" type="button" style={{ fontSize: '25px'}}>Etsy</button>
        </div>
    </div>
  );
}

export default About;
