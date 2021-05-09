import React from 'react';
import FrontPage from '../img/frontPage.png'
import Why from '../img/why.png'

function Introduction(params) {
    return (
        <div >
            <div className='IntroductionText'>
                <img className='introImage' src={FrontPage}></img>
                <div className ='introText'>
                <h1 >Welcome to Zen for Change</h1>
                <p>We are a mental health and sex therapy practice with a special focus on culture, diversity, and trauma. <br></br> We understand that finding a place we can trust to tell our stories is essential to find a path for healing, recovery, and transformation.<br></br> An unknown path is only unknown until you are ready to explore it. We are here to assist you explore your needs and collaboratively work towards your goals.</p>
                </div>
            </div>
            <div className ='whyText'>               
                    <img src={Why}></img>
                    <h2 className='whyZFC'>Why Zen For Change?</h2>
                    <p>We believe that part of the process of finding ourselves in this rapid paced world is to stop and take a moment of stillness to reflect. By exploring this sense of stillness we are able to reflect on our inner self and use our intuition to identify what we need to move forward in our path.</p>
            </div>
            
        </div>
    )

}
export default Introduction