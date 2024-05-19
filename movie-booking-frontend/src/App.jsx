import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import LoginComponent from './Components/LoginComponent/LoginComponent';
import SignUpComponent from './Components/SignUpComponent/SignUpComponent';
import GetMoviesComponent from './Components/GetMoviesComponent/GetMoviesComponent';
import LogoutComponent from './Components/LogoutComponent/LogoutComponent';
import AdminSignupComponent from './Components/AdminSignupComponent/AdminSignupComponent';
import AdminLoginComponent from './Components/AdminLoginComponent/AdminLoginComponent';
import AddMovieComponent from './Components/AddMovieComponent/AddMovieComponent';
import MovieAdminComponent from './Components/MovieAdminComponent/MovieAdminComponent';
import BookingComponent from './Components/BookingComponent/BookingComponent';
const App = () => {
  return (
    <Router>
            <div className="App">
              <nav className='nav-bar'>
                        <Link className='navbar-brand' to={'/login'}>
                            MOVIE BOOKING APP
                        </Link>
                       <ul className='items'>
                                <li className='nav-item'>
                                    <Link className='nav-link' to={'/login'}>Login</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to={'/signup'}>SignUp</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to={'/logout'}>LogOut</Link>
                                </li>
                            </ul>
                </nav>

                    <div className='auth-wrapper'>
                        <div className='auth-inner'>
                            <Routes>
                                <Route exact path='/' element={<LoginComponent/>}/>
                                <Route path='/login' element={<LoginComponent/>}/>
                                <Route path='adminsignup' element={<AdminSignupComponent/>}/>
                                <Route path='/adminlogin' element={<AdminLoginComponent/>}/>
                                <Route path='/signup' element={<SignUpComponent/>}/>
                                <Route path='/moviespage' element={<GetMoviesComponent/>}/>
                                <Route path='/logout' element={<LogoutComponent/>}/> 
                                <Route path='/addmovie' element={<AddMovieComponent/>}/> 
                                <Route path='/moviesadmin' element={<MovieAdminComponent/>}/>
                                <Route path='/bookticket' element={<BookingComponent/>}/>
                            </Routes>
                        </div>
                    </div>            
            </div>
        </Router>
  )
}

export default App