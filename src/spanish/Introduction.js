import React from 'react';
import FrontPage from '../img/frontPage.png'
import Why from '../img/why.png'

function Introduction(params) {
    return (
        <div >
            <div className='IntroductionText'>
                <img className='introImage' src={FrontPage}></img>
                <div className ='introText'>
                <h1 >Bienvenido a Zen for Change</h1>
                <p>Somos una práctica privada que brinda servicios de salud mental y terapia sexual. Encontrar un lugar en el cual uno se sienta con confianza suficiente para contar nuestras historias es indispensable para seguir el camino de la sanación emocional y la transformación. Un camino desconocido solo nos es desconocido hasta que estemos listos para explorarlo. Estamos aquí para asistirlo con sus necesidades y juntos trabajar para lograr sus objetivos hacia su bienestar.</p>
                </div>
            </div>
            <div className ='whyText'>               
                    <img src={Why}></img>
                    <h2 className='whyZFC'>¿Por qué Zen for Change?</h2>
                    <p>Creemos que parte del proceso de encontrarnos a nosotros mismos en este mundo de ritmo acelerado es detenernos y tomarnos un momento de quietud para reflexionar. Al explorar esta sensación de quietud, podemos reflexionar sobre nuestro yo interior y usar nuestra intuición para identificar lo que necesitamos para avanzar en nuestro camino.</p>
            </div>
            
        </div>
    )

}
export default Introduction