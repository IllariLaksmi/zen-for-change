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
                        <h2>Estefanía Simich Muñoz, PhD, NCC, LCPC, CST</h2>
                        <h3>Psychotherapist, Certified Sex Therapist, Supervisor & Consultant</h3>
                    </div>
                </div>
                <div>
                    <p className='pEstefania'>I have always had an innate passion for helping others. I was introduced to psychology courses during my first years of undergraduate course work which steered me into the field of psychotherapy. I have been in private practice since 2012. I work with clients struggling with anxiety, complex trauma, relationship issues, depression, domestic violence, sexual violence, sexual concerns, and gender identity.

                    My education, training and experience in various areas of mental health provided me with the ability to incorporate different therapeutic methods to assist people with their individual needs. I have a holistic approach to psychotherapy. I am committed to helping you explore the physical, mental, emotional, and spiritual blockages that can be built over time due to past experiences.

                    In my spare time I enjoy singing, doing research, and finding a new coffee spot.</p>
                </div>
                <div className='publicSection'>
                    <div>
                        <div className='sectionEstefania'>
                            <h4>Education</h4>
                            <p> - Bachelor of Arts in Psychology (BA)<br></br><br></br>

                            - Master of Arts in Community Counseling (MA)<br></br><br></br>

                            -Human Sexuality PhD at the California Institute of Integral Studies </p>
                        </div>
                        <div className='sectionEstefania'>
                            <h4>Licenses</h4>
                            <p>- NCC (National Certified Counselor)<br></br><br></br>

                            - LCPC (Licensed Certified Professional Counselor) in Maryland<br></br><br></br>

                            - LCPC Supervisor in Maryland<br></br><br></br>

                            - AASECT Certified Sex Therapist (American Association of Sexuality Educators, Counselors and Therapists<br></br><br></br>

                            -AASECT Certified Sex Therapist Supervisor In Training<br></br><br></br>

                            - Clinical Psychologist (Perú)</p>
                        </div>

                    </div>
                    <div className='sectionEstefania'>
                        <h4>Publications & conferences</h4>
                        <p>
                            - Collaboration in the book: Juvenile Delinquency. Legislation, treatment and Collaboration in the book:  Universidad de Lima, Peru. 2016.<br></br><br></br>

                            - Collaboration in Guide for the Detection and Referral of Victims of ESNNA, Ministry of Women and Vulnerable Populations Lima, Peru. 2015<br></br><br></br>

                            - Collaboration in a training manual for police officers in caring for victims of human trafficking in Madre de Dios PROMSEX. Lima Peru. 2014.<br></br><br></br>

                            - Islam and Sexuality. The Journal of Sexual Medicine. May 2017.<br></br><br></br>

                            - The benefits of counseling skills in sexological interventions. The Journal of Sexual Medicine. September 2017.<br></br><br></br>

                            - Presenter at the 48th Annual Conference of the AASECT-American Association of Sexuality Educators and Therapists in San Juan, Puerto Rico, June 2016.<br></br><br></br>
                        </p>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )

}
export default Estefania