import React from "react";
import NavBar from './navBar'
import psychotherapy from './img/psychotherapy.png'
function Psychotherapy(params) {
  return (
    <div className="IntroductionText">
      <NavBar />
      <div>
        <h1>Psychotherapy</h1>
        <div className='psychoStyle'>
          <img id='imgPsycho' src={psychotherapy}></img>
          <p>We all are born with an innate capacity to develop happy and healthy lives. However, sometimes life experiences such as pain and trauma can interfere with our healthy development. As a result we may become unhappy or unsatisfied with our lives and adopt self-defeating thinking and behavioral patterns. Therapy is the process of examining, and exploring one’s self to develop new strategies to cope with life’s challenges. We will assist you in your journey of identifying new coping mechanisms to achieve life balance.</p>
        </div>
      </div>
    </div>
  );
}
export default Psychotherapy;
