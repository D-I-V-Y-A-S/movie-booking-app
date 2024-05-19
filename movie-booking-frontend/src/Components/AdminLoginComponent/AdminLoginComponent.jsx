import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './AdminLoginComponent.css'

const AdminLoginComponent = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailHandler = (event) =>{
        setEmail(event.target.value)
      }
    
    const passwordHandler = (event) =>{
        setPassword(event.target.value)
      }
    
    const formSubmitHandler = (event) =>{
        event.preventDefault()
        
        axios
        .post(`http://localhost:3500/api/v1/admin/login`,{email : email,password : password})
        .then((response) => {
            if (response.status == 201)
            {
              alert(`Welcome ${response.data.firstName} ${response.data.lastName} !`)
              window.localStorage.setItem('token',response.data.token)
              window.location.href = '/moviesadmin'
            }
        })
        .catch((error) => {
          alert(`Status : ${error.response.status} - ${error.response.data.message}`)
      })}


  return (
    <React.Fragment>
        <div className='box'>
        <h1 style={{color:"black"}}>Admin Login</h1>
        <form onSubmit={formSubmitHandler}>
        <div className='mb-3'>
            <label>Email</label>
            <input
                type='email'
                className='form-control'
                placeholder='Enter your email address'
                value={email}
                onChange={emailHandler}
                required
            />
        </div>

        <div className='mb-3'>
            <label>Password</label>
            <input
                type='password'
                className='form-control'
                placeholder='Enter your password'
                value={password}
                onChange={passwordHandler}
                required
            />
        </div>

        <div className='mb-3'>
          <div className='custom-checkbox custom-control'>
            <input 
              type='checkbox'
              className='custom-control-input'
              id='customCheck1'
              />

            <label className='custom-control-label' htmlFor='customCheck1'>
              Remember me?
            </label>
          </div>

          <div className='d-grid'>
            <button type='submit' className='btn btn-primary' >Submit</button>
          </div>

          <p className='forgot-password text-right'>
          <a href='#'>Forgot Password?</a>
          </p>

          <p className='text-right'>
            New Admin? <Link to='/adminsignup'>Register here!</Link>
          </p>
          <p className='text-right'>
            Are u a user,? <Link to='/login'>Login here!</Link>
          </p>

        </div>

      </form>
      </div>
    </React.Fragment>
  )
}

export default AdminLoginComponent