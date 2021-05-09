import React from "react";
import NavBar from './navBar'
import policy from './docs/cancellationpolicy.pdf'
function pdf(props) {
    return <div>
        <h1>Hola</h1>
        <object data={policy} type='application/pdf' width='50%' height='300px'></object>
    </div>
  }

export default pdf