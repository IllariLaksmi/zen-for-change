import React from 'react';
import NavBar from './navBar';
import NavBarResponsive from './navBarResponsive'
import policy from '../docs/cancellationPolicyES.pdf';
import confidentiality from '../docs/limitsOfConfidentialityES.pdf';
import teletherapy from '../docs/teletherapyES.pdf';
import Footer from './footer'

class Forms extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      pdf: confidentiality
    }
  }
  changeConfidentiality() {
    this.setState({
     pdf: confidentiality
    })
   }
   changeTeletherapy() {
    this.setState({
     pdf: teletherapy
    })
    console.log(teletherapy)
   }
   changeCancellation() {
    this.setState({
     pdf: policy
    })
   }
  render() {
    const {pdf} = this.props
    return (
      <div>
      <NavBar />
      <NavBarResponsive />
      <div className='pdfViewer'>
      <h1>Forms</h1>
      <div  className='normalForms'>
        <div id='normalForms' className='Forms'>
          <button onClick={() => this.changeConfidentiality()}>Limites de confidencialidad</button>
          <button onClick={() => this.changeTeletherapy()}>Teleterapia</button>
          <button onClick={() => this.changeCancellation()}>Política de cancelación</button>
        </div>
        <div>
        <object id='viewer' data={this.state.pdf} type='application/pdf' width='100%' height='800vw'></object>
        </div>
        </div>
        <div>
          <div id='formsResponsive' className='Forms'>
          <a href={policy} download="cancellationPolicy">
Cancellation policy
</a>
<a href={confidentiality} download="limitsOfConfidentiality">
Limits of confidentiality
</a>
<a href={teletherapy} download="2020-teletherapy-therapy-form">
Teletherapy form
</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    );
  }
}
export default Forms;