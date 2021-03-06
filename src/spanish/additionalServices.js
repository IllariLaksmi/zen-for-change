import React from "react";
import NavBar from './navBar'
import NavBarResponsive from './navBarResponsive'
import Footer from './footer'

function AdditionalServices(params) {
  return (
    <div className='services'>
      <NavBar />
      <NavBarResponsive />
      <h1 className='titleServices'>Servicios adicionales</h1>
      <div className='columnServices'>
          <div className='rowServices'>
              <h2>Evaluaciones</h2>
              <div>
                  <p>- Evaluaciones Psicosexuales</p>
                </div>
              <div>
                  <p>- Evaluaciones de abuso de sustancias para casos de DUI / DWI (SOLO en español)</p>
              </div>
              <div>
                  <p>- DUI/DWI clases individuales y grupales ordenadas por la corte (SOLO en español)</p>
              </div>
              <div>
                  <p>- Evaluaciones psicosociales de inmigración</p>
              </div>
          </div>
          <div className='rowServices'>
              <h2>Supervisión clínica</h2>
              <div>
                  <p>- Supervisora aprobada de Maryland para consejeros profesionales graduados con licencia (LGPC)</p>
                </div>
              <div>
                  <p>- Asociación Estadounidense de Educadores, Consejeros y Terapeutas en Sexualidad (AASECT), Terapeuta Sexual Certificado (CST)/ Supervisor en formación</p>
              </div>
          </div>
          <div className='rowServices'>
              <h2>Servicios de consultoría</h2>
              <div>
                  <p>- Violencia de género en poblaciones migrantes</p>
                </div>
              <div>
                  <p>- Salud mental en poblaciones migrantes</p>
              </div>
              <div>
                  <p>- Violencia sexual experientada por poblaciones migrantes</p>
              </div>
              <div>
                  <p>- Ciudadanía sexual experientada por poblaciones migrantes</p>
              </div>
              <div>
                  <p>- Sexualidad</p>
              </div>
             
          </div>
      </div>
      <Footer />
    </div>
  );
}
export default AdditionalServices;