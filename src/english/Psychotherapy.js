import React from "react";
import NavBar from './navBar'
import psychotherapy from '../img/psychotherapy.png'
import psychotherapyIssues from '../img/psychotherapyIssues.png'
import NavBarResponsive from './navBarResponsive'
import Footer from './footer'
function Psychotherapy(params) {
  return (
    <div >
      <NavBar />
      <NavBarResponsive />
      <div className="Psychotherapy">
        <div className='psyRow'>
          <div >
            <h1>Psychotherapy</h1>
            <img id='imgPsycho' src={psychotherapy}></img>
          </div>
          <div>
            <p id='pPsycho'>We all are born with an innate capacity to develop happy and healthy lives. However, sometimes life experiences such as pain and trauma can interfere with our healthy development. As a result we may become unhappy or unsatisfied with our lives and adopt self-defeating thinking and behavioral patterns. Therapy is the process of examining, and exploring one’s self to develop new strategies to cope with life’s challenges. We will assist you in your journey of identifying new coping mechanisms to achieve life balance.</p>
            </div>        
        </div>
        <div className='session'>
          <h3>What can you expect during a session?</h3>
          <p>During our initial session we will go over your initial intake as well as we will address any questions or concerns you might have. We will also discuss the concerns that are bringing you to therapy. During your intake you can expect us to ask you questions about your health, sleeping and eating habits, family history, childhood and hobbies. </p>
        </div>
          <h3>We are able to provide individual therapy, family therapy, couples and relationship counseling. </h3>
          <img className='imgPsycho' src={psychotherapyIssues}></img>
        </div>
          <Footer />
    </div>
  );
}
export default Psychotherapy;
