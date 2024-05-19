require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3500
const cors = require('cors')
const mongoose = require('mongoose')

const loginRouter = require('./routes/loginRoute')
const signupRouter = require('./routes/signupRoute')
const moviesRouter=require('./routes/moviesRoute')
const matchMoviesRouter=require('./routes/matchMovie')
const bookingRouter=require('./routes/bookingRoute')
const adminLoginRouter=require('./routes/adminLoginRoute')
const adminSignupRouter=require('./routes/adminSignupRoute')
const addMoviesRouter=require('./routes/addMovieRoute')
const viewBookingsRouter=require('./routes/ViewBookings')

app.get('/', (request, response) => {
    response.send(`<h1>Hello World!</h1> It's working`)
})

app.use(cors())
app.use(express.json());

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error', (errorMessage) => console.log(errorMessage))
db.once('open', () => console.log('Connected to DataBase successfully'))

app.use('/api/v1/login',loginRouter)
app.use('/api/v1/signup',signupRouter)
app.use('/api/v1/movie',moviesRouter)
app.use('/api/v1/find',matchMoviesRouter)
app.use('/api/v1/avail',bookingRouter)
app.use('/api/v1/admin/login',adminLoginRouter)
app.use('/api/v1/admin/signup',adminSignupRouter)
app.use('/api/v1/movies/add',addMoviesRouter)
app.use('/api/v1/viewBookings',viewBookingsRouter)

app.listen(PORT, console.log(`Server running at http://localhost:${PORT}/api/v1/login`))