import React from "react";
import NavBar from './navBar'
import NavBarResponsive from './navBarResponsive'
import Footer from './footer'

function AdditionalServices(params) {
  return (
    <div className='services'>
      <NavBar />
      <NavBarResponsive />
      <h1 className='titleServices'>Additional Services</h1>
      <div className='columnServices'>
          <div className='rowServices'>
              <h2>Evaluations</h2>
              <div>
                  <p>- Psychosexual Evaluations</p>
                </div>
              <div>
                  <p>- Substance Abuse Evaluations for DUI/DWI cases (ONLY in Spanish)</p>
              </div>
              <div>
                  <p>-  DUI/DWI Court mandated individual and group classes (ONLY in Spanish)</p>
              </div>
              <div>
                  <p>- Psychosocial Immigration Evaluations</p>
              </div>
          </div>
          <div className='rowServices'>
              <h2>Clinical Supervision</h2>
              <div>
                  <p>- Maryland Approved Supervisor for Licensed Graduate Professional Counselors (LGPC)</p>
                </div>
              <div>
                  <p>- American Association of Sexuality Educators, Counselors and Therapists (AASECT) Certified Sex Therapist (CST) / Supervisor in training</p>
              </div>
          </div>
          <div className='rowServices'>
              <h2>Consultacy Services</h2>
              <div>
                  <p>- Gender violence in migrant populations</p>
                </div>
              <div>
                  <p>- Mental Health in migrant populations</p>
              </div>
              <div>
                  <p>- Sexual violence experienced by migrant populations</p>
              </div>
              <div>
                  <p>- Sexual Citizenship of migrant populations</p>
              </div>
              <div>
                  <p>- Sexuality</p>
              </div>
          </div>
      </div>
      <Footer />
    </div>
  );
}
export default AdditionalServices;