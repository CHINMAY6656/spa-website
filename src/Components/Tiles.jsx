import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions,CardContent,Button,Typography } from '@material-ui/core';
import { TextField,FormControl,MenuItem,Select} from '@material-ui/core'
const axios = require("axios").default;
const qs = require("querystring");
const useStyles = makeStyles({
    root: {
      minWidth: '30rem',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
function Tiles(props) {
    const classes = useStyles();
    const [editor,setEditor] = useState('false');
    const [time,setTime] = useState(props.data.time);
    const [date,setDate] = useState(props.data.date);
    const [note,setNote] = useState(props.data.note);
    const [btn,setBtn] = useState('');


    function deleteReservation(e) {
      setBtn('1');
        axios({
            method: "post",
            url: "https://safe-peak-80759.herokuapp.com/deleteReservation",
            data: qs.stringify({
              id: props.data._id
            }),
            headers: {
              "content-type": "application/x-www-form-urlencoded;charset=utf-8"
            }
          })
          props.action();

    }

    function updateReservation(e) {
      setBtn('1');
        axios({
            method: "post",
            url: "https://safe-peak-80759.herokuapp.com/updateReservation",
            data: qs.stringify({
              id: props.data._id,
              uid: props.data.uid,
              time: time,
              date: date,
              note: note
            }),
            headers: {
              "content-type": "application/x-www-form-urlencoded;charset=utf-8"
            }
          })
          setEditor('false');
          setBtn('');
          props.action();
    }
    
    if (editor === 'false') {
        return (
            <div>
                <Card  className={classes.root+" Tile"} variant="outlined">
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {note}
                        </Typography>
                        <Typography variant="h5" component="h2">
                        {time}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        {date}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button disabled={btn} size="small" onClick={() => setEditor('true')}>Edit</Button>
                        <Button disabled={btn} size="small" onClick={deleteReservation}>Delete</Button>
                    </CardActions>
                </Card>
            </div>
        )
    } else {
        return(
            <div className="Tile">
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
                <Button disabled={btn} style={{width:"10rem",height:"3rem",margin:"auto"}} variant="contained" onClick={updateReservation}  color="primary" type="submit">Save Edit</Button>
            </FormControl>
            </div>
        )
    }
    
}

export default Tiles
