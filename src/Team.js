import React from "react";
import Slider from "infinite-react-carousel";
import estefania from "./img/estefania.png";
import abimelec from "./img/abimelec.png";
import keysharely from "./img/keisharely.png";
const SimpleSlider = () => (
  <Slider dots>
    <div className="Estefania">
      <div className='size'>
        <div>
          <img src={estefania} alt="Estefania"></img>
        </div>
        <div>
          <h3>Estefanía Simich Muñoz MA, NCC, LCPC, CST</h3>
          <p>
            Psychotherapist, Sex Therapist, Clinical Director & Consultant Owner
            of Zen for change
          </p>
        </div>
      </div>
    </div>
    <div className="Estefania">
        <div className='size'>
      <img src={keysharely} alt="Keysharely"></img>
      <div>
        <h3>Keisharely Pérez Arocho</h3>
        <p>Graduate Professional Counselor </p>
      </div>
      </div>
    </div>
    <div className="Estefania">
        <div className='size'>
      <img src={abimelec} alt="Abimelec"></img>
      <div>
        <h3>Abimelec Torres Serrano, MS, NCC, LGPC</h3>
        <p>Graduate Professional Counselor </p>
      </div>
      </div>
    </div>
  </Slider>
);

export default function Welcome() {
  return (
    <div className='team'>
      <h1>Meet our team!</h1><br></br>
      <SimpleSlider className='team'></SimpleSlider>
    </div>
  );
}
