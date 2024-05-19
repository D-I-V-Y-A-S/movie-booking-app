const movieModel = require('../Models/movieModel')
const adminModel = require('../Models/adminModel')
const jwt = require('jsonwebtoken')
const JWT_TOKEN = 'bhbgcvxcexefvtyhniknuvy'

const viewUserBookings = async (request,response)=>
{
    const {token} = request.body
    try{
        const loggedInUser = jwt.verify(token,JWT_TOKEN)
        const loggedInUserEmail = loggedInUser.email 
        const authenticatedUser = await adminModel.findOne({email : loggedInUserEmail})
        const moviesBooked=await movieModel.find({ticketsBooked:{$gt:0}})
        console.log(moviesBooked)
        if(authenticatedUser && moviesBooked)
        {
              const responseData = {
            authenticatedUser: authenticatedUser,
            moviesBooked: moviesBooked
        };
        return response.status(200).json(responseData)
    }
        response.status(400).json({message : 'Something went wrong, try again'})
    }
    catch(error)
    {
        response.status(500).json({message:error.message})
    }
}

module.exports = {viewUserBookings}