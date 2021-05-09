import React from 'react';
import Button from '@material-ui/core/Button';
import NavBar from './navBar';
import photo from '../img/photo.png'
import NavBarResponsive from './navBarResponsive'
import Footer from './footer'
function Estefania() {
    return (
        <div className='spaceEstefania'>
            <NavBar />
            <NavBarResponsive />
            <div className='Estefania1'>
                <div className='titleEstefania'>
                    <img src={photo}></img>
                    <div className='textEstefania'>
                        <h2>Estefanía Simich Muñoz, MA, NCC, LCPC, CST, candidata a doctorado</h2>
                        <h3>Psicoterapeuta, terapeuta sexual, asesora y supervisora ​​clínica</h3>
                    </div>
                </div>
                <div>
                    <p className='pEstefania'>Siempre he tenido una pasión innata por ayudar a los demás. Me introdujeron en los cursos de psicología durante mis primeros años de trabajo en el curso de pregrado, lo que me llevó al campo de la psicoterapia. He estado en la práctica privada desde 2012. Trabajo con clientes que luchan con ansiedad, trauma complejo, problemas de relación, depresión, violencia doméstica, violencia sexual, preocupaciones sexuales e identidad de género.

Mi educación, formación y experiencia en diversas áreas de la salud mental me proporcionaron la capacidad de incorporar diferentes métodos terapéuticos para ayudar a las personas con sus necesidades individuales. Tengo un enfoque holístico de la psicoterapia. Me comprometo a ayudarlo a explorar los bloqueos físicos, mentales, emocionales y espirituales que se pueden construir con el tiempo debido a experiencias pasadas.

En mi tiempo libre disfruto cantar, investigar y encontrar un nuevo café.</p>
                </div>
                <div className='publicSection'>
                    <div>
                        <div className='sectionEstefania'>
                            <h4>Educacion</h4>
                            <p> - 
Licenciatura en Psicología (BA)<br></br><br></br>

                            - 
Maestría en Consejería Comunitaria (MA)<br></br><br></br>

                            -Candidato a Doctorado en Sexualidad Humana en el Instituto de Estudios Integrales de California </p>
                        </div>
                        <div className='sectionEstefania'>
                            <h4>Licencias</h4>
                            <p>- NCC (Consejera Certificada Nacional)<br></br><br></br>

                            - LCPC (Consejera profesional certificado con licencia) en Maryland<br></br><br></br>

                            - LCPC Supervisora in Maryland<br></br><br></br>

                            - AASECT Terapeuta sexual certificada (Asociación Estadounidense de Educadores, Consejeros y Terapeutas Sexuales)<br></br><br></br>

                            -AASECT Supervisora ​​certificada de terapia sexual en entrenamiento<br></br><br></br>

                            - Psicóloga clínica (Perú)</p>
                        </div>

                    </div>
                    <div className='sectionEstefania'>
                        <h4>Publicaciones & conferencias</h4>
                        <p>
                            - Colaboración en el libro: Delincuencia Juvenil. Legislación, tratamiento y colaboración en el libro: Universidad de Lima, Perú. 2016.<br></br><br></br>

                            - Collaboration in Guide for the Detection and Referral of Victims of ESNNA, Ministry of Women and Vulnerable Populations Lima, Peru. 2015<br></br><br></br>

                            - Colaboración en manual de capacitación para policías en atención a víctimas de trata de personas en Madre de Dios PROMSEX. Lima, Perú. 2014.<br></br><br></br>

                            - Islam y Sexualidad. The Journal of Sexual Medicine. May 2017.<br></br><br></br>

                            - Los beneficios de las habilidades de asesoramiento en intervenciones sexológicas. The Journal of Sexual Medicine. September 2017.<br></br><br></br>

                            - Presentador en la 48a Conferencia Anual de la AASECT-Asociación Americana de Educadores y Terapeutas en Sexualidad en San Juan, Puerto Rico, junio de 2016.<br></br><br></br>
                        </p>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )

}
export default Estefania