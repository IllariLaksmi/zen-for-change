import React from "react";
import NavBar from './navBar'
import sexTherapy from '../img/sexTherapy.png'
import sexTherapyIssues from '../img/sexTherapyIssues.png'
import certificate from '../img/certificate.jpeg'
import NavBarResponsive from './navBarResponsive'
import Footer from './footer'
function SexTherapy(params) {
  return (
    <div >
    <NavBar />
    <NavBarResponsive />
    <div className="Psychotherapy">
      
      <div className='psyRow'>
        <div >
          <div className='sexT'>
          <img id='certificate' src={certificate}></img>
          <h1>Sex Therapy</h1>
          </div>
          <img id='imgPsycho' src={sexTherapy}></img>
        </div>
        <div>
          <p>Our sexuality is an essential part of our whole being, our objective is to help you live and enjoy your sexuality to the fullest. Sex therapy is the process of exploring emotional, mental, physical, and spiritual blockages that interfere with our sexual lives. This process is done through the use of “talk therapy” by incorporating different modalities of sex therapy that will be tailored to your needs as an individual, couple or relationship. We are a sex positive, kink and poly friendly practice.</p>
          </div>        
      </div>
      <div className='session'>
        <h3>What can you expect in sex therapy?</h3>
        <p>Throughout the process of sex therapy we will go over a detailed intake and we will discuss your sexual history. During your intake you can expect us to ask you about your health, sleeping and eating habits, family history, childhood and hobbies. For your sexual history we will explore all of your experiences that have informed your thoughts and beliefs about sex and sexuality.</p>
      </div>
        <h3>We are able to provide individual therapy, couples and relationship counseling. </h3>
        <img className='imgPsycho' src={sexTherapyIssues}></img>
        </div>
        <Footer />
  </div>
  );
}
export default SexTherapy;
