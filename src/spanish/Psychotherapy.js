import React from "react";
import NavBar from './navBar'
import psychotherapy from '../img/psychotherapy.png'
import psychotherapyIssues from '../img/psychotherapyIssuesEs.png'
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
            <h1>Psicoterapia</h1>
            <img id='imgPsycho' src={psychotherapy}></img>
          </div>
          <div>
            <p id='pPsycho'>Todos nacemos con una capacidad innata para desarrollar una vida feliz y saludable. Sin embargo, a veces las experiencias de la vida como el dolor y el trauma pueden interferir con nuestro desarrollo saludable. Como resultado, podemos volvernos infelices o insatisfechos con nuestras vidas y adoptar patrones de comportamiento y pensamiento contraproducentes. La terapia es el proceso de examinarse y explorarse a sí mismo para desarrollar nuevas estrategias para hacer frente a los desafíos de la vida. Lo ayudaremos en su proceso para identificar nuevos mecanismos de afrontamiento para lograr el equilibrio de la vida.</p>
            </div>        
        </div>
        <div className='session'>
          <h3>¿Qué puede esperar durante una sesión?</h3>
          <p>Durante nuestra sesión inicial, repasaremos su admisión inicial y abordaremos cualquier pregunta o inquietud que pueda tener. También discutiremos las preocupaciones que lo llevan a la terapia. Durante su admisión, puede esperar que le hagamos preguntas sobre su salud, hábitos de sueño y alimentación, antecedentes familiares, infancia y pasatiempos.</p>
        </div>
          <h3>Podemos brindar terapia individual, terapia familiar, parejas y consejería de relaciones. </h3>
          <img className='imgPsycho' src={psychotherapyIssues}></img>
        </div>
          <Footer />
    </div>
  );
}
export default Psychotherapy;
