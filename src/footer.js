import React from 'react';
import Meditation from './img/meditation.svg'
function Footer(params) {
    return (
        <div className='Footer'>
            <footer>
            <div className='contact'>
                <div>
                    <h1>Let's get in touch</h1>
                    <img src={Meditation}></img>
                </div>
            </div>
            <div>
            <div className='contactButtons'>
                    <div>
                        <h3>Call me</h3>
                    <a href="tel:+1(443)326-9018"><span class="iconify" data-icon="bx:bxs-phone-call" data-inline="false"></span> +1 (000) 000-0000</a>
                    </div>
                    <div>
                        <h3>Or email me!</h3>
                    <a href="mailto:info@zenforchange.com"><span class="iconify" data-icon="ant-design:mail-outlined" data-inline="false"></span> info@zenforchange.com</a>
                    </div>
                </div>
                <br></br>
                <p>Zen for Change, LLC • Baltimore, MD • 443.326.9018</p>
                <div className='iconsSocial'>
                        <a href='https://www.facebook.com/zenforchange/'><span class="iconify" data-icon="ant-design:facebook-filled" data-inline="false"></span></a>
                        <a href='https://www.instagram.com/zen_for_change/'><span class="iconify" data-icon="ant-design:instagram-filled" data-inline="false"></span></a>
                        <a href='https://www.linkedin.com/company/zen-for-change-llc/'><span class="iconify" data-icon="akar-icons:linkedin-fill" data-inline="false"></span></a>
                        <a href='https://twitter.com/niasimich'><span class="iconify" data-icon="akar-icons:twitter-fill" data-inline="false"></span></a>
    </div>
    <p>Mail can be sent to:
                    P.O. Box 44274
                    Nottingham, MD 21236
                </p>
            </div>
            </footer>
        </div>
    )
    
}
export default Footer