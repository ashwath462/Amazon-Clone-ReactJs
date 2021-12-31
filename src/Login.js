import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './login.css'
import axios from 'axios';

function Login({setLoginUser}) {
    const navigate = useNavigate();
    const [user, setUser] =useState({
        email:"",
        password:"",
        ls:""
    })

    const handleChange = e => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const signIn = e =>{
        axios.post("http://localhost:9002/login", user)
        .then(res =>{
            alert(res.data.message)
            setLoginUser(res.data.user)
            navigate("/")
        })
    }

    return (
        <div className='login'>
            <Link to="/">
                <img className="login__logo" src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"></img>
            </Link>

            <div className='login__container'>
                <h1>Sign-In</h1>

                <form>
                    <h5>E-Mail</h5>
                    <input type="text" name="email" value={user.email} onChange={handleChange}></input>

                    <h5>Password</h5>
                    <input type="password" name="password" value={user.password} onChange={handleChange}></input>
                    <button type="submit" className='login__signInButton' onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale.Please see our Privacy Notice, out Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button className='login__registerButton' onClick={()=>{navigate("/register")}}>Create your Amazon Account</button>
            </div>
        </div>

    )
}

export default Login
