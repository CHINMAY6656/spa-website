import React, { useEffect, useState } from 'react'
import Tiles from './Tiles';

const axios = require("axios").default;
function Reservations(props) {
    
    const [data,setData] = useState(0);
    const [reservations , setReservations] = useState();

    
    function changeData() {
        setData(data+1);
    }

    useEffect ( () => {
        let url_response = 'https://safe-peak-80759.herokuapp.com/reservations/'+props.uid;
        axios.get(url_response)
        .then((response) => {
            let arrayReservations = []
            for (let i = 0; i < response.data.length; i++) {
                const element = (<Tiles data={response.data[i]} key={i} action={changeData} />)
                arrayReservations.push(element);
            }
            setReservations(arrayReservations);
            if (reservations === []) {
                setReservations(<div><h1>NO RESERVATIONS</h1></div>)
            }
        },[data]);
        
        
    })

    

    return (
        <div className="res">
            <h1>ALL YOUR RESERVATIONS</h1>
            {reservations}

        </div>
    )
}

export default Reservations
