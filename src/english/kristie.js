import React from 'react';
import Button from '@material-ui/core/Button';
import NavBar from './navBar';
import kristie from '../img/kristieSection.png'
import NavBarResponsive from './navBarResponsive'
import Footer from './footer'
function Kristie() {
    return (
        <div className='spaceEstefania'>
            <NavBar />
            <NavBarResponsive />
            <div className='Estefania1'>
                <div className='titleEstefania'>
                    <img src={kristie}></img>
                    <div className='textEstefania'>
                        <h2>Kristie Lomangino, MSED, MA, LMSW</h2>
                        <h3>LICENSED MASTER SOCIAL WORKER</h3>
                    </div>
                </div>
                <div>
                    <p className='pEstefania'>Life is a journey. Sometimes you can travel alone, but there are times in everyone’s life where they could use someone to walk with them and help them reach their goals. I believe everyone is doing the best they can at all times, sometimes that means checking off all of the things the to-do list, and other times, that means stumbling out of bed. I enjoy assisting people in living their most authentic life; to help figure out what went so right that they were able to check off all those items, or to help identify he barrier to getting out of that bed and get on that journey. My treatment philosophy is that I assist the people I work with to break the accepted and expected roles, and to foster self-acceptance and self-compassion, in whatever form that takes. I enjoy working with young adults, adults, couples, and families. My clinical work encompasses attachment, psychodynamic, family systems, cognitive behavioral, gender-affirming, alternative relationships, trauma focused, and mindful based modalities. I have an eclectic knowledge base, a unique combination of skills and life experiences that allow me to connect with people from all walks of life. I look forward to meeting and connecting with you. </p>
                </div>
                <div className='publicSection'>
                    <div className="twoSections">
                        <div className='sectionEstefania'>
                            <h4>Education</h4>
                            <p >- Bachelor or Arts in Biology and Relational Psychology, Goucher College<br></br><br></br>

                                - Master of Science in Education, New York Institute of Technology<br></br><br></br>
                                - Master of Arts in Clinical Psychology: Attachment, The New School of Social Research<br></br><br></br>
                                - Master of Science in Social Work, Fordham University<br></br><br></br>


                            </p>
                        </div>
                        <div className='sectionEstefania'>
                            <h4>Licenses</h4>
                            <p>- LMSW (Licensed Master of Social Work), Maryland and New York<br></br><br></br>

                                - Certificate in Advanced Trauma Treatment: Level 1, Ferentz Institute<br></br><br></br>

                                - Multi-Dimensional Family Therapy, MDFT International<br></br><br></br>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )

}
export default Kristie