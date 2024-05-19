const moviesModel = require('../Models/movieModel');

const bookTicket = async (request, response) => {
    try {
        const { name, available } = request.params;
        console.log(name, available); // Interstellar 55
    
        const regex = new RegExp(name, 'i');
        const updatedMovie = await moviesModel.findOneAndUpdate(
            { movieName: regex }, 
            { $inc: { availability: -1 ,ticketsBooked:1} },
            { new: true } // Return the updated document
        )

        if (!updatedMovie) {
            return response.status(404).json({ message: 'Movie not found or no available seats' });
        }
        response.status(200).json({message:"Ticket booked successfully!"});
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

module.exports = { bookTicket }