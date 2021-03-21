import React from 'react';
import Button from '@material-ui/core/Button';
function GetInTouch() {
    return (
        <div className='getInTouch'>
            <h1>Let's get in touch</h1>
            <div className='contactButtons'>
                <div>
                    <h3>Call me</h3>
                <button><span class="iconify" data-icon="bx:bxs-phone-call" data-inline="false"></span> +1 (000) 000-0000</button>
                </div>
                <div>
                    <h3>Email me</h3>
                <button><span class="iconify" data-icon="ant-design:mail-outlined" data-inline="false"></span> info@zenforchange.com</button>
                </div>
            </div>
            <div  className='formulario'>
                <form name="form1" method="POST" onsubmit="returnComprobar(this)"  action= "mailto:friedapples824@gmail.com?subject=asunto" enctype ="text/plain">
                <h3>Or fill this form</h3>
                <input placeholder='Name'></input><br></br>
                <input placeholder='Subject' ></input><br></br>
                <textarea placeholder='Message'></textarea>
                <input type="submit" name="Submit" value="Enviar"></input>
                </form>
            </div>
        </div>
    )
    
}
export default GetInTouch