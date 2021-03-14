import React from 'react';
import Button from '@material-ui/core/Button';
function GetInTouch() {
    return (
        <div className='getInTouch'>
            <h1>Let's get in touch</h1>
            <div>
                <h3>Call me</h3>
            <Button variant="contained">+1 (000) 000-0000</Button>
            </div>
            <div>
                <h3>Call me</h3>
            <Button variant="contained">+1 (000) 000-0000</Button>
            </div>
            <div>
                <label>Name</label><br></br>
                <input></input><br></br>
                <label>Subject</label><br></br>
                <input></input><br></br>
                <label>Message</label><br></br>
                <textarea></textarea>
            </div>
        </div>
    )
    
}
export default GetInTouch