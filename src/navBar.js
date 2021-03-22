import React from 'react';
import headerOption1 from './img/headerOption1.png'
function NavBar(params) {
  return (
    <div>
      <nav>
        <div className='NavBar'>
          <img src={headerOption1} alt='header'></img>
          <ul className='routes'>
            <li><a href='/aboutus'>Home</a></li>
            <li><a>Therapy</a>
              <ul>
                <li><a class='optionsMenu'href='/psychotherapy'>Psychotherapy</a></li>
                <li><a class='optionsMenu' href='/sextherapy'>Sex Therapy</a></li>
                <li><a class='optionsMenu' >Additional services</a></li>
              </ul>
            </li>
            <li><a >Forms</a></li>
            <li><a href='/forms'>Contact</a></li>
          </ul>
        </div>
        <div className='languages'>
          <a href='/aboutus'>English</a>
          <a href='/psychotherapy'>Español</a>
        </div>
      </nav>
    </div>
  )

}
export default NavBar