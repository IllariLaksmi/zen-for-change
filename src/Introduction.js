import React from 'react';
import FrontPage from './img/frontPage.png'
function Introduction(params) {
    return (
        <div className='IntroductionText'>
            <img className='introImage' src={FrontPage}></img>
            <div>
            <h1>Welcome to Zen for Change, a private practice in Fells Point-Baltimore</h1>
            <p>We are a mental health and sex therapy practice with a special focus on culture, diversity and trauma. We understand that finding a place we can trust to tell our stories is essential to finding a path to healing, recovery, and transformation.<br></br>We are here to assist you with your needs and collaboratively work towards your goals.</p>
            </div>
        </div>
    )

}
export default Introduction