import React from 'react';
import headerOption1 from './img/headerOption1.png'
function NavBar(params) {
  return (
    <div>
      <div className='NavBar'>
        <img src={headerOption1} alt='header'></img>
        <div className='routes'>
          <a href='/aboutus'>About us</a>
          <a href='/psychotherapy'>Psychotherapy</a>
          <a href='/sextherapy'> Sex Therapy</a>
          <a href='/forms'>Forms</a>
        </div>
      </div>
      <div className='languages'>
        <a href='/aboutus'>English</a>
        <a href='/psychotherapy'>Español</a>
      </div>
    </div>
  )

}
export default NavBar