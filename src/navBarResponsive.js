import React from 'react';
import headerOption1 from './img/headerOption1.png'
import zfcResponsive from './img/zfcresponsive.png'

function NavBar(params) {
  return (
    <div className='responsiveNavBar'>
      <nav >
        <div className='navBarR'>
            <img src={zfcResponsive} ></img>
            <span id='menuIcon' class="material-icons">
                menu
            </span>
        </div>
      </nav>
    </div>
  )

}
export default NavBar