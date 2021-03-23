import React from "react";
import NavBar from './navBar'
import sexTherapy from './img/sexTherapy.png'
import sexTherapyIssues from './img/sexTherapyIssues.png'
function SexTherapy(params) {
  return (
<div className="Psychotherapy">
      <NavBar />
        <h1>Sex Therapy</h1>
          <img id='imgPsycho' src={sexTherapy}></img>
          <p>Our sexuality is an essential part of our whole being, our objective is to help you live and enjoy your sexuality to the fullest. Sex Therapy is the process of exploring emotional, mental, physical and spiritual blockages that interfere with our sexual lives. This process is done through the use of “talk therapy” by incorporating different modalities of sex therapy that will be tailored to your needs as an individual, couple or relationship. We are a sex positive, kink and poly friendly practice.</p>
          <h2>We are able to provide individual therapy, couples counseling, and family therapy. </h2>
          <img className='imgPsycho' src={sexTherapyIssues}></img>
    </div>
  );
}
export default SexTherapy;
