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
          <h1>Terapia Sexual</h1>
          </div>
          <img id='imgPsycho' src={sexTherapy}></img>
        </div>
        <div>
          <p>Nuestra sexualidad es una parte esencial de nuestro ser, nuestro objetivo es ayudarle a vivir y disfrutar su sexualidad al máximo. La terapia sexual es el proceso de explorar bloqueos emocionales, mentales, físicos y espirituales que interfieren con nuestras vidas sexuales. Este proceso se realiza mediante el uso de la "terapia de conversación" incorporando diferentes modalidades de terapia sexual que se adaptarán a sus necesidades como individuo, pareja u otra relación. Somos una práctica acogedora de Kink y poliamor.</p>
          </div>        
      </div>
      <div className='session'>
        <h3>¿Qué puede esperar durante la terapia sexual?</h3>
        <p>A lo largo del proceso de la terapia sexual, repasaremos información detallada así como hablaremos de su historia sexual. En su sesión inicial también le haremos preguntas sobre su salud, sus hábitos de sueño y alimentación, antecedentes familiares, infancia y pasatiempos. Para su historia sexual, exploraremos todas sus experiencias que han formado sus pensamientos y creencias acerca del sexo y la sexualidad.</p>
      </div>
        <h3>Podemos proporcionar terapia individual, parejas y consejería de relaciones. </h3>
        <img className='imgPsycho' src={sexTherapyIssues}></img>
        </div>
        <Footer />
  </div>
  );
}
export default SexTherapy;
