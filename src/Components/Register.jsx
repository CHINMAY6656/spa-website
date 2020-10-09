import React, { useState } from 'react'
import { TextField,Button,FormControl } from '@material-ui/core'
import firebase from 'firebase'
import {Success,Failure} from './Snippets';
const axios = require("axios").default;
const qs = require("querystring");
function Register() {

    const [email,setMail] = useState('');
    const [password,setpwd] = useState('');
    const [number,setNum] = useState('');
    const [name,setName] = useState('');
    const [success,setSuccess] = useState();
    const [btnReg, setBtn] = useState('');
    function handleRegistration(e) {
        setBtn('1');
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function (user) {
            if(user.user['uid'] !== undefined){
                axios({
                    method: "post",
                    url: "https://safe-peak-80759.herokuapp.com/register",
                    data: qs.stringify({
                      uid: user.user['uid'],
                      name: name,
                      mobile: number
                    }),
                    headers: {
                      "content-type": "application/x-www-form-urlencoded;charset=utf-8"
                    }
                  })
                setBtn('');
                setSuccess(<Success />);
                
            }
        })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode,errorMessage);
            setSuccess(<Failure />);
            setBtn('');

          });
        
        
    
        
    }
    

    return (
        <div className="Register">
            <h1>Register</h1>
            <FormControl action="">
            <TextField value={email}  onChange={e => setMail(e.target.value)} id="outlined-basic" style={{margin:'1rem',width:'20rem'}} label="Email" variant="outlined" required />
            <TextField value={name} onChange={e => setName(e.target.value)} id="outlined-basic" style={{margin:'1rem',width:'20rem'}} label="Full Name" variant="outlined"  required/>
            <TextField value={number} onChange={e => setNum(e.target.value)} id="outlined-basic" style={{margin:'1rem',width:'20rem'}} label="Mobile Number" variant="outlined" required />
            <TextField value={password} onChange={e => setpwd(e.target.value)} id="outlined-basic" style={{margin:'1rem',width:'20rem'}} label="Password" type="password" variant="outlined" required />
            <Button onClick={handleRegistration} disabled={btnReg} style={{width:"10rem",height:"3rem",margin:"auto"}} variant="contained" color="secondary" >Register</Button>
            </FormControl>
            {success}
        </div>
    )
}

export default Register
