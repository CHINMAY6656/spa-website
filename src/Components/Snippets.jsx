import React from 'react'

function Success() {
    return (
        <div>
            <h5 style={{backgroundColor:"greenyellow",color:"green"}}>Successfully Registered!  Please Login!</h5>
        </div>
    )
}

function Failure() {
    return (
        <div>
            <h5 style={{backgroundColor:"orange",color:"red"}}>Registration Failed !!</h5>
        </div>
    )
}


function SuccessLogin() {
    return (
        <div>
            <h5 style={{backgroundColor:"greenyellow",color:"green"}}>Successful Login!</h5>
        </div>
    )
}

function FailureLogin() {
    return (
        <div>
            <h5 style={{backgroundColor:"orange",color:"red"}}>Login Failed !!</h5>
        </div>
    )
}

export  {Success,Failure,SuccessLogin,FailureLogin}
