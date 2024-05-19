const mongoose = require('mongoose')

const adminModel = new mongoose.Schema(
    {
        firstName :{
        type : String,
        required : true
    },

    lastName :{
        type : String,
        required : true
    },

    email :{
        type : String,
        required : true,
        unique : true
    },

    password : {
        type : String,
        required : true
    }},
    {
        collection:'admin'
    }
)

module.exports = mongoose.model('admin',adminModel)