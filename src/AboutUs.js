import React from "react";
import estefaniaAboutUs from './img/estefaniaAboutUs.jpeg'
import sofaZFC from './img/sofaZFC.jpeg'

export default function Welcome() {
  return (
    <div>
      <div className='AboutUsStart'>
        <img src={estefaniaAboutUs} alt="Estefania"></img>
        <div>
          <h1>About us</h1>
          <h3>
            Zen for Change is a welcoming and non-judgemental client centered
            environment. We highly value the relationship that we create with our
            clients as we offer a safe space for healing. <br></br> Expertize in
            the sexual and mental health fields providing services from an
            intersectional lens with a broad understanding of cultural diversity.
        </h3>
        </div>
      </div>
      <div className='AboutUsEnd'> 
        <div>
          <h1>Our mission</h1>
          <h3>
            Our purpose is to provide therapy and consulting services in the
            sexual and mental health field to assist clients live the life that
            they imagine for themselves.
          </h3>
          <h1>Our vision</h1>
          <h3>
            To be the leading bilingual organization in the sexual and mental
            health field.
          </h3>
        </div>
        <div>
        <img src={sofaZFC}  alt="Estefania"></img>
      </div>
      </div>
      
    </div>
  );
}
