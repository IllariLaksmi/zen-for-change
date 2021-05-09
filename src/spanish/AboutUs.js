import React from "react";
import estefaniaAboutUs from '../img/estefaniaAboutUs.jpeg'
import Values from '../img/values.png'
import Light from '../img/light.jpeg'
import Buda from '../img/buda.jpeg'
import sofaZFC from '../img/sofaZFC.jpeg'
import Divider from '@material-ui/core/Divider';

export default function Welcome() {
  return (
    <div className='AboutUs'>
      <div className='AboutUsStart'>
        <img id='startImage' src={estefaniaAboutUs} alt="Estefania"></img>
        <div className='AboutUsStartText'>
          <h1>Quienes somos</h1>
          <h3>
          Zen for Change, LLC es una práctica bilingüe - inglés y español -  y multicultural que se estableció después de identificar la gran necesidad de contar con estos servicios en la comunidad.
          <br></br>Nuestro objetivo es ayudar a nuestros clientes a encontrar un lugar seguro y respetuoso para efectuar el proceso de sanación y apoyo en la travesía de la vida. Nuestro enfoque holístico de la terapia es esencial para el trabajo que hacemos. Es a través de este lente que brindamos servicios desde una amplia comprensión de la diversidad cultural. 

        </h3>
        </div>
      </div>
      <br></br>
      <div className='AboutUsEnd'>
        <div className='AboutUsEndText'>
        <img id='reImage' src={estefaniaAboutUs} alt="Estefania"></img>
        <div className='boxContainer'>
          <div className='boxMission'>
            <h1>Nuestra misión</h1>
            <h3>
            Nuestro propósito es brindar servicios de terapia y consultoría en los campos de la salud sexual y mental para empoderar a nuestros clientes a vivir la vida que ellos han imaginado para sí mismos.
          </h3>
          </div>
          
          <div className='boxMission'>
            <h1>Nuestra vision</h1>
            <h3>
            Fortalecer a nuestra comunidad ayudando a nuestros clientes a identificar en su intuición interior su propio poder y fuerza para superar los obstáculos de la vida.
          </h3>
          </div >
          </div>
          </div>
          
        </div>


    </div>
  );
}
