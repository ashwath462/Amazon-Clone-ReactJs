import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './login.css'
import axios from 'axios';

function Register() {
    const navigate = useNavigate()
    const [user, setUser] =useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const register = e =>{
        let emailPattern = new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);                         
        let emailPattern2 = new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+\.[A-Za-z]+$/);
        const {name,email, password,reEnterPassword} = user
        if(name && email && password && (password === reEnterPassword) && (emailPattern.test(email) || emailPattern2.test(email))){
            // alert("posted")
            axios.post("http://localhost:9002/register", user)
            .then( res => {
                alert(res.data.message)
                navigate("/login")
            })
        }else{
            alert("invalid input")
        }

    }

    return (
        <div className='login'>
            <Link to="/">
                <img className="login__logo" src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"></img>
            </Link>

            <div className='login__container'>
                <h1>Sign-Up</h1>

                <form>
                    <h5>Name</h5>
                    <input type="text" name="name" value={user.name} onChange={handleChange}></input>
                    <h5>E-Mail</h5>
                    <input type="text" name="email" value={user.email} onChange={handleChange}></input>

                    <h5>Password</h5>
                    <input type="password" name="password" value={user.password} onChange={handleChange}></input>
                    <h5>Re-enter Password</h5>
                    <input type="password" name="reEnterPassword" value={user.reEnterPassword} onChange={handleChange}></input>
                    <button type="submit" className='login__signInButton' onClick={register}>Sign Up</button>
                </form>
            </div>
        </div>

    )
}

export default Register
