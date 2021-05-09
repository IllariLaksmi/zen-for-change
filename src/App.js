import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './english/Home'
import Psychotherapy from './english/Psychotherapy'
import SexTherapy from './english/SexTherapy'
import Forms from './english/Forms'
import AdditionalServices from './english/additionalServices'
import Resources from './english/GetInTouch'
import Estefania from './english/estefania';
import Keisharely from './english/keisharely';
import Abimelec from './english/abimelec';
//Spanish
import HomeES from './spanish/Home'
import PsychotherapyES from './spanish/Psychotherapy'
import SexTherapyES from './spanish/SexTherapy'
import FormsES from './spanish/Forms'
import AdditionalServicesES from './spanish/additionalServices'
import ResourcesES from './spanish/GetInTouch'
import EstefaniaES from './spanish/estefania';
import KeisharelyES from './spanish/keisharely';
import AbimelecES from './spanish/abimelec';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component{


      render(){
        return (
    <Router>
      <Switch>
        <Route exact path='/psychotherapy'>
            <Psychotherapy />
        </Route>
        <Route exact path='/es/psychotherapy'>
            <PsychotherapyES />
        </Route>
        <Route exact path='/sextherapy'>
            <SexTherapy></SexTherapy>
        </Route>
        <Route exact path='/es/sextherapy'>
            <SexTherapyES></SexTherapyES>
        </Route>
        <Route exact path='/forms'>
            <Forms />
        </Route>
        <Route exact path='/es/forms'>
            <FormsES />
        </Route>
        <Route exact path='/es/forms'>
            <FormsES />
        </Route>
        <Route path='/es/additionalServices'>
            <AdditionalServicesES />
        </Route>
        <Route path='/es/resources'>
            <ResourcesES />
        </Route>
        <Route path='/es/estefania'>
            <EstefaniaES />
        </Route>
        <Route path='/es/keisharely'>
            <KeisharelyES />
        </Route>
        <Route path='/additionalServices'>
            <AdditionalServices />
        </Route>
        <Route path='/resources'>
            <Resources />
        </Route>
        <Route path='/estefania'>
            <Estefania />
        </Route>
        <Route path='/keisharely'>
            <Keisharely />
        </Route>
        <Route path='/abimelec'>
            <Abimelec />
        </Route> 
        <Route path='/es/abimelec'>
            <AbimelecES />
        </Route> 
        <Route path='/es'>
            <HomeES></HomeES>
        </Route>
        <Route path='/'>
            <Home></Home>
        </Route> 
      </Switch>
  </Router>
                 ) }};


export default App;
