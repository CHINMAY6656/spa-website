import React, { useState } from 'react'
import { TextField,Button,FormControl } from '@material-ui/core'
import firebase from 'firebase';
import { useHistory } from "react-router-dom";
import {SuccessLogin,FailureLogin} from './Snippets';

function Login(props) {

    const [email,setMail] = useState('');
    const [password,setPwd] = useState('');
    const [btn,setBtn] = useState('');
    const [success,setSuccess] = useState();

    let history = useHistory();
    function handleLogin(e) {
        setBtn('1');
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function (res) {
            if(res.user['uid'] !== undefined){
                let url = "dash/"+res.user['uid'];
                setSuccess(<SuccessLogin />)
                props.action();
                history.push(url);
            }
        })
        .catch(function(error) {
            // Handle Errors here.
                console.log(error);
                setBtn('');
                setSuccess(<FailureLogin />)
          });
    }   

    return (
            <div className="Login">
            <h1>Login</h1>
            <FormControl action="">
                <TextField  style={{margin:'1rem',width:'20rem'}} value={email} onChange={(e) => {setMail(e.target.value)}} id="outlined-basic" label="Email" variant="outlined" type="email" required />
                <TextField style={{margin:'1rem',width:'20rem'}} value={password}  onChange={e => setPwd(e.target.value)} id="outlined-basic" label="Password" type="Password" variant="outlined" required />
                <Button disabled={btn} onClick={handleLogin} style={{width:"10rem",height:"3rem",margin:"auto"}} variant="contained" color="primary" type="submit">Log In</Button>
            </FormControl>
            {success}
            </div>
        
    )
}

export default Login
