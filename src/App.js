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



function App() {
  return (
    <Router>
      <Switch>
        <Route path='/psychotherapy'>
            <Psychotherapy />
        </Route>
        <Route path='/sextherapy'>
            <SexTherapy></SexTherapy>
        </Route>
        <Route path='/forms'>
            <Forms />
        </Route>
        <Route path='/'>
            <Home></Home>
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
