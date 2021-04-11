import React from "react";
import estefaniaAboutUs from './img/estefaniaAboutUs.jpeg'
import Values from './img/values.png'
import sofaZFC from './img/sofaZFC.jpeg'

export default function Welcome() {
  return (
    <div className='AboutUs'>
      <div className='AboutUsStart'>
        <img id='startImage' src={estefaniaAboutUs} alt="Estefania"></img>
        <div className='AboutUsStartText'>
          <h1>About us</h1>
          <h3>
          Zen for Change, LLC is a bilingual (English/Spanish) and multicultural practice that was established after identifying a great need for services in the community.
Our focus is to assist our clients find a safe and respectful place of healing and support through their life journey. Our holistic approach to therapy is essential to the work we do. It is through this lens that we provide services from a broad understanding of cultural diversity. 

        </h3>
        <div><img src={Values}></img></div>
        </div>
      </div>
      <br></br>
      <div className='AboutUsEnd'>
        
        
        <div className='AboutUsEndText'>
          <div>
            <h1>Our mission</h1>
            <h3>
            Our purpose is to provide sex and mental health therapy and consulting services by empowering our clients to live the lives that they have imagined for themselves. 
          </h3>
            <h1>Our vision</h1>
            <h3>
            Strengthen our community by assisting our clients to trust their intuition, inner power and strength to overcome life’s obstacles.  
          </h3>
          </div>
        </div>
        <div>
          <img src={sofaZFC} alt="Estefania"></img>
        </div>
      </div>

    </div>
  );
}
