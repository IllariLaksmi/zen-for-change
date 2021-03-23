import React from 'react';
import NavBar from './navBar';
import policy from './docs/cancellationpolicy.pdf';
import confidentiality from './docs/limitsOfConfidentiality.pdf';
import teletherapy from './docs/2020-teletherapy-therapy-form.pdf';

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
      <div className='pdfViewer'>
        <div className='Forms'>
          <button onClick={() => this.changeConfidentiality()}>Limits of confidentiality</button>
          <button onClick={() => this.changeTeletherapy()}>Teletherapy</button>
          <button onClick={() => this.changeCancellation()}>Cancellation Policy</button>
        </div>
        <div>
        <object id='viewer' data={this.state.pdf} type='application/pdf' width='100%' height='800px'></object>
        </div>
      </div>
    </div>
    );
  }
}
export default Forms;