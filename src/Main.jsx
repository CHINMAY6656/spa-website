import React, { useState } from 'react'
import Login from './Components/Login'
import Register from './Components/Register'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  import Dashboard from './Components/Dashboard';
function Main() {


    const [auth,setAuth] = useState("false");

    function changeAuth() {
        setAuth("true");
    }

    return (
        <div>
            <h1>Welcome to BioCare Reservation</h1>
            <Router>
            <Switch>
                <Route exact path="/">
                <div className="Main">
                <Login action={changeAuth} />
                <Register />
                
                </div>
                </Route>
                <Route path="/dash/:uid">
                    <Dashboard auth={auth} />
                </Route>
            </Switch>
            </Router>
            
            
            
        </div>
    )
}

export default Main
