import React from 'react';
import headerOption1 from '../img/headerOption1.png'
import zfcResponsive from '../img/zfcresponsive.png'

function NavBar(params) {
  let number= 0;
  function show() {
    number++
    if(number%2 == 0){
      document.getElementById('menuR').style.display = 'none';
    }else{
      document.getElementById('menuR').style.display = 'flex';
    }
  }
  return (
    <div>
    <div className='responsiveNavBar'>
      <nav >
        <div className='navBarR'>
            <a href='/'><img src={zfcResponsive} ></img></a>
            <span onClick={show} id='menuIcon' class="material-icons">
                menu
            </span>
        </div>
        
      </nav>
    </div>
    <div id='menuR'className='menuR'>
                <a href='/psychotherapy'>Psychotherapy</a><br></br>
                <a href='/sextherapy'>Sex Therapy</a><br></br>
                <a href='/additionalServices'>Additional services</a><br></br>
                <a href='/forms' >Forms</a><br></br>
            <a href='/resources'>Resources</a><br></br>
            <a href='/'>English</a><br></br>
          <a href='/es'>Español</a>           
        </div>
    </div>
  )

}
export default NavBar