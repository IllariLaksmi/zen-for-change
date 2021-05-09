import React from 'react';
import Button from '@material-ui/core/Button';
import NavBar from './navBar';
import keisharely from '../img/keisharelyCropped.png'
import NavBarResponsive from './navBarResponsive'
import Footer from './footer'
function Keisharely() {
    return ( 
        <div className='spaceEstefania'>
            <NavBar />
            <NavBarResponsive />
            <div className='Estefania1'>
                <div className='titleEstefania'>
                    <img src={keisharely}></img>
                    <div className='textEstefania'>
                        <h2>Keysharely Pérez Arocho, MS, NCC, LGPC</h2>
                        <h3>Consejera Profesional Graduada</h3>
                    </div>
                </div>
                <div>
                    <p className='pEstefania'>Ser terapeuta se alinea con la esencia misma de lo que soy, tanto personal como profesionalmente. Realmente disfruto trabajar con niños pequeños y familias para mejorar las relaciones, manejar el comportamiento y disfrutar unos de otros. Nací y crecí en la isla de Puerto Rico. Amo el cine, la moda y la comida.

Utilizo varios enfoques en mi trabajo, incluida la terapia cognitivo-conductual (TCC), la atención plena, la modificación de la conducta y la terapia de aceptación y compromiso (ACT).

    Me apasiona lo que hago. Me preocupo por la gente y quiero lo mejor para ellos en sus vidas. Tengo un estilo terapéutico sencillo pero directo. Creo que a las personas les va mejor cuando se sienten escuchadas y cuentan con personas que las apoyan en sus vidas. Realmente me encanta ayudar a los padres a comprender mejor a sus hijos y a conectarse con ellos para transformar la relación entre padres e hijos.</p>
                </div>
                <div className='publicSection'>
                    <div>
                        <div className='sectionEstefania'>
                            <h4>Educacion</h4>
                            <p>- Licenciatura en Psicología. Universidad de Puerto Rico en Mayagüez<br></br><br></br>

                                - Maestría en Ciencias en Consejería Profesional Clínica. Universidad Loyola de Maryland</p>
                        </div>
                        <div className='sectionEstefania'>
                            <h4>Licenses</h4>
                            <p>- 
NCC (Consejera Certificada Nacional)<br></br><br></br>

                                - 
LGPC (Consejera profesional graduada con licencia) en Maryland</p>
                        </div>
            </div>
        </div>
        </div>
        <Footer />
        </div>
    )
    
}
export default Keisharely