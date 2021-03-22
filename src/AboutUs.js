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
            We provide expertise in the sexual and mental health fields by providing holistic services with a broad understanding of cultural diversity.
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
              Our purpose is to provide therapy and consulting services in the sexual and mental health fields to empower clients to live the life that they imagine for themselves
          </h3>
            <h1>Our vision</h1>
            <h3>
            To be the leading bilingual organization on sexual and mental health in the Maryland area.
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
