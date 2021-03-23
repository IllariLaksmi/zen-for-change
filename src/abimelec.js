import React from 'react';
import Button from '@material-ui/core/Button';
import NavBar from './navBar';
import abimelec from './img/abimelecSection.png'
function Abimelec() {
    return ( 
        <div>
            <NavBar />
            <div className='Estefania1'>
                <div className='titleEstefania'>
                    <img src={abimelec}></img>
                    <div className='textEstefania'>
                        <h2>Abimelec Torres Serrano, MS, NCC, LGPC</h2>
                        <h3>Graduate Professional Counselor</h3>
                    </div>
                </div>
                <div>
                    <p className='pEstefania'>Thank you for taking this first step towards a healthier life. Sometimes the hustle of life makes it difficult for us to take time for ourselves. We are constantly trying to keep up with our responsibilities, to be there for the ones we love, and to meet the requirements of our demanding society. At times we might feel stuck, anxious, depressed, lost, confused, or overwhelmed, and we might need someone by our side. Sometimes that someone can be a family member or a dearly beloved friend, but oftentimes we might need someone else. Someone with no other intention than to listen without judgment and to guide us to a better place.

                        Whether this is the first time you might be considering mental health therapy, or even if you have had previous experiences, it can be challenging to find the right therapist. If you think we might be a good match, I am looking forward to meeting you. I have had the privilege to be a helping hand for people that are going through difficult situations.</p>
                </div>
                <div className='publicSection'>
                    <div>
                        <div className='sectionEstefania'>
                            <h4>Education</h4>
                            <p>- Bachelor of Arts in Psychology. University of Puerto Rico at Mayagüez.<br></br><br></br>

                                - Master of Science in Clinical Mental Health Counseling. Johns Hopkins University, School of Education</p>
                        </div>
                        <div className='sectionEstefania'>
                            <h4>Licenses</h4>
                            <p>- NCC (National Certified Counselor)<br></br><br></br>

                                - LGPC (Licensed Graduate Professional Counselor) in Maryland</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}
export default Abimelec