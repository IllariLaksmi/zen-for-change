import React from 'react';
import Button from '@material-ui/core/Button';
import NavBar from './navBar';
import keisharely from './img/keisharelyCropped.png'
function Keisharely() {
    return ( 
        <div>
            <NavBar />
            <div className='Estefania1'>
                <div className='titleEstefania'>
                    <img src={keisharely}></img>
                    <div className='textEstefania'>
                        <h2>Keysharely Pérez Arocho</h2>
                        <h3>Graduate Professional Counselor</h3>
                    </div>
                </div>
                <div>
                    <p className='pEstefania'>Being a therapist aligns with the very core of who I am, both personally and professionally. I really enjoy working with young children and families to improve relationships, manage behavior, and enjoy one another. I was born and raised on the island of Puerto Rico. I love movies, fashion, and food.

                        I use several approaches in my work, including Cognitive Behavioral Therapy (CBT), mindfulness, Behavior Modification, and Acceptance & Commitment Therapy (ACT).

                            I am passionate about what I do. I care about people and want the best for them in their lives. I have an easy-going, but direct therapeutic style. I believe people do best when they feel heard and have supportive people in their lives. I really love helping parents better understand and connect with their children in order to transform the parent-child relationship.</p>
                </div>
                <div className='publicSection'>
                    <div>
                        <div className='sectionEstefania'>
                            <h4>Education</h4>
                            <p>- Bachelor of Arts in Psychology. University of Puerto Rico at Mayagüez

                                - Master of Science in Clinical Professional Counseling. Loyola University of Maryland</p>
                        </div>
            </div>
        </div>
        </div>
        </div>
    )
    
}
export default Keisharely