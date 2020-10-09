import React from 'react'
import {
    useParams
  } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Reservations from './Reservations';
import NewReservation from './NewReservartion';
function Dashboard(props) {
    let { uid } = useParams();
    
    let history = useHistory();
    if (props.auth === "false") {
        history.push("/");
    }

    
    
    return (
        <div>
            <h1>Welcome to dashboard</h1>
            <div className="dash">
                <div><Reservations uid={uid} /></div>
                <div><NewReservation uid={uid} /></div>
            </div>
        </div>
    )
}

export default Dashboard
