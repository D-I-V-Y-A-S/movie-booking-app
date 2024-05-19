import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './BookingComponent.css'
import { Link } from 'react-router-dom'

const BookingComponent = () => {
    const [userData, setUserData] = useState([])
    const [movieData, setMovieData] = useState([])
    const token = window.localStorage.getItem('token')
    console.log(token)

    useEffect(() => {
        axios.post(`http://localhost:3500/api/v1/viewBookings`, {
            //item set in loginComponent
            token: window.localStorage.getItem('token'),
        }, [])
            .then((response) => {
                console.log(response.data)
                setUserData(response.data.authenticatedUser)
                setMovieData(response.data.moviesBooked[0])
                console.log(movieData[0])
            })
            .catch((error) => {
                alert(`Status : ${error.response.status} - ${error.response.data.message}`)
            })
    }, [])

    return (
        <div className='table'>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Movie</th>
                        <th>TicketsBooked</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{userData.firstName} {userData.lastName}</td>
                        <td>{userData.email}</td>
                                <td>{movieData.movieName}</td>
                                <td>{movieData.ticketsBooked}</td>
                    </tr> 
                </tbody>
            </table>
          <span style={{color:"white"}}> Go to movies? <Link to='/moviesadmin'>click here!</Link></span>
        </div>
    )
    
}

export default BookingComponent