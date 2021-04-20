import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home'
import Psychotherapy from './Psychotherapy'
import SexTherapy from './SexTherapy'
import Forms from './Forms'
import AdditionalServices from './additionalServices'
import Resources from './GetInTouch'
import Estefania from './estefania';
import Keisharely from './keisharely';
import Abimelec from './abimelec';
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
        <Route exact path='/sextherapy'>
            <SexTherapy></SexTherapy>
        </Route>
        <Route exact path='/forms'>
            <Forms />
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
        <Route path='/'>
            <Home></Home>
        </Route> 
      </Switch>
  </Router>
                 ) }};


export default App;
