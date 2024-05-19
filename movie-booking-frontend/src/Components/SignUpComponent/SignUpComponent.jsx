import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './SignUpComponent.css'
const SignUpComponent = () => {
       const [userData,setUserData]=useState({
        firstName:'',
        lastName:'',
        email:'',
        password:''
       })
       
       const {firstName,lastName,email,password}=userData
       const inputHandler=(event)=>{
        const {name,value}=event.target
        setUserData({...userData,[name]:value})
       }
    
        const formSubmitHandler = (event) => {
            event.preventDefault()
    
            
            axios.post(`http://localhost:3500/api/v1/signup`,{userData:userData})
            .then((response) => {
                alert(`Successfully created account for ${response.data.firstName} ${response.data.lastName} !`)
                window.location.href = '/'
            })
            .catch((error) => {
                alert(`Status : ${error.response.status} - ${error.response.data.message}`)
            })
        }
    
      return (
        <div className='box'>
        <form onSubmit={formSubmitHandler} >
            <h1 style={{color:"black"}}>Sign up</h1>
    
            <div className='mb-3'>
                <label>First Name</label>
                <input 
                    type='text'
                    name="firstName"
                    className='form-control'
                    placeholder='Enter your first name'
                    value={firstName}
                    onChange={inputHandler}
                    required
                />
            </div>
    
            <div className='mb-3'>
                <label>Last Name</label>
                <input
                    type='text'
                    name="lastName"
                    className='form-control'
                    placeholder='Enter your last name'
                    value={lastName}
                    onChange={inputHandler}
                    required
                />
            </div>
    
            <div className='mb-3'>
                <label>Email</label>
                <input
                    type='email'
                    name="email"
                    className='form-control'
                    placeholder='Enter your email address'
                    value={email}
                    onChange={inputHandler}
                    required
                />
            </div>
    
            <div className='mb-3'>
                <label>Password</label>
                <input
                    type='password'
                    name="password"
                    className='form-control'
                    placeholder='Enter your password'
                    value={password}
                    onChange={inputHandler}
                    required
                />
            </div>
    
            <div className='d-grid'>
                <button type='submit' className='btn btn-primary' >Submit</button>
            </div>
    
            <p className='forgot-password text-right'>
                Already registered, <Link to='/login'>Sign in here?</Link>
            </p>
    
          </form>
          </div>
      )
    }
export default SignUpComponent