import React from 'react';
import Button from '@material-ui/core/Button';
import NavBar from './navBar';
import abimelec from '../img/abimelecSection.png'
import NavBarResponsive from './navBarResponsive'
import Footer from './footer'
function Abimelec() {
    return ( 
        <div className='spaceEstefania'>
            <NavBar />
            <NavBarResponsive />
            <div className='Estefania1'>
                <div className='titleEstefania'>
                    <img src={abimelec}></img>
                    <div className='textEstefania'>
                        <h2>Abimelec Torres Serrano, MS, NCC, LGPC</h2>
                        <h3>Consejero Profesional Graduado</h3>
                    </div>
                </div>
                <div>
                    <p className='pEstefania'>Gracias por dar este primer paso hacia una vida más saludable. A veces, el ajetreo de la vida nos dificulta tomarnos un tiempo para nosotros mismos. Estamos constantemente tratando de cumplir con nuestras responsabilidades, estar ahí para los que amamos y cumplir con los requisitos de nuestra sociedad exigente. A veces podemos sentirnos estancados, ansiosos, deprimidos, perdidos, confundidos o abrumados, y es posible que necesitemos a alguien a nuestro lado. A veces, ese alguien puede ser un miembro de la familia o un amigo muy querido, pero a menudo es posible que necesitemos a otra persona. Alguien sin otra intención que escuchar sin juzgar y guiarnos a un lugar mejor.

Ya sea que sea la primera vez que esté considerando la terapia de salud mental, o incluso si ha tenido experiencias previas, puede ser un desafío encontrar el terapeuta adecuado. Si cree que podríamos ser una buena pareja, estoy deseando conocerte. He tenido el privilegio de ayudar a personas que atraviesan situaciones difíciles.</p>
                </div>
                <div className='publicSection'>
                    <div>
                        <div className='sectionEstefania'>
                            <h4>Educación</h4>
                            <p>- Licenciatura en Psicología. Universidad de Puerto Rico en Mayagüez.<br></br><br></br>

                            - Maestría en Ciencias en Consejería Clínica en Salud Mental. Universidad Johns Hopkins, Facultad de Educación</p>
                        </div>
                        <div className='sectionEstefania'>
                            <h4>Licencias</h4>
                            <p>- NCC (Consejero Certificado Nacional)<br></br><br></br>

                            - LGPC (Consejero profesional graduado con licencia) en Maryland</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
    
}
export default Abimelec