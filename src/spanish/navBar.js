import React from 'react';
import headerOption1 from '../img/headerOption1.png'
import MenuIcon from '@material-ui/icons/Menu';
function NavBar(params) {
  return (
    <div className='totalNavBar'>
      <nav>
        <div className='NavBar'>
          <img src={headerOption1} alt='header'></img>
          <ul className='routes'>
            <li><a href='/es'>Inicio</a></li>
            <li><a>Terapia</a>
              <ul>
                <li><a className='optionsMenu'href='/es/psychotherapy'>Psicoterapia</a></li>
                <li><a class='optionsMenu' href='/es/sextherapy'>Terapia sexual</a></li>
                <li><a class='optionsMenu' href='/es/additionalServices'>Servicios adicionales</a></li>
              </ul>
            </li>
            <li><a href='/es/forms' >Formularios</a></li>
            <li><a href='/es/resources'>Recursos</a></li>
          </ul>
        </div>
        <div className='languages'>
          <a href='/'>English</a>
          <a href='/es'>Español</a>
        </div>
      </nav>
    </div>
  )

}
export default NavBar