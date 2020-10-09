import React, { useState } from 'react'
import { TextField,Button,FormControl,MenuItem,Select } from '@material-ui/core'
const axios = require("axios").default;
const qs = require("querystring");

function NewReservartion(props) {
    const [time , setTime] = useState("11:00 AM");
    const [date , setDate] = useState('2020-10-10');
    const [note , setNote] = useState('');
    const [btn , setBtn] = useState('')
    function handleSubmit(e) {
        e.preventDefault();
        setBtn("1");
        axios({
            method: "post",
            url: "https://safe-peak-80759.herokuapp.com/newReservation",
            data: qs.stringify({
              uid: props.uid,
              time: time,
              date: date,
              note: note
            }),
            headers: {
              "content-type": "application/x-www-form-urlencoded;charset=utf-8"
            }
          })
        setDate('2020-10-10');
        setNote('');
        setTime('11:00 AM');
        setBtn('');
    }

    return (

        

        <div className="newRes">
            <h3>Make a New Reservation</h3>
            <br/>
            <FormControl action="">
            <label style={{textAlign:"left",marginLeft:"5%"}} >Time</label>
                
                <Select value={time} onChange={e => setTime(e.target.value)} style={{margin:'1rem',width:'20rem'}}>
                    <MenuItem value="11:00 AM" >11:00 AM</MenuItem>
                    <MenuItem value="12:00 PM" >12:00 PM</MenuItem>
                    <MenuItem value="01:00 PM" >01:00 PM</MenuItem>
                    <MenuItem value="02:00 PM" >02:00 PM</MenuItem>
                    <MenuItem value="03:00 PM" >03:00 PM</MenuItem>  
                    <MenuItem value="04:00 PM" >04:00 PM</MenuItem>
                    <MenuItem value="07:00 PM" >07:00 PM</MenuItem>
                    <MenuItem value="08:00 PM" >08:00 PM</MenuItem>
                    <MenuItem value="09:00 PM" >09:00 PM</MenuItem>
                </Select>
                <br/>
                <label style={{textAlign:"left",marginLeft:"5%"}}>Date</label>
                <TextField style={{margin:'1rem',width:'20rem'}}  id="basic" type="date" value={date} onChange={e => setDate(e.target.value)}    required />
                <br/>
                <label style={{textAlign:"left",marginLeft:"5%"}}>Note</label>
                <TextField style={{margin:'1rem',width:'20rem'}} value={note} onChange={e => setNote(e.target.value)}  id="basic" type="text" multiline={true} required />
                <Button style={{width:"10rem",height:"3rem",margin:"auto"}} disabled={btn} variant="contained" onClick={handleSubmit} color="primary" type="submit">Book Reservation</Button>
            </FormControl>
        </div>
    )
}

export default NewReservartion
