const mongoose = require('mongoose')

const propertiesSchema = mongoose.Schema
(
    {   
        //gia to authentication
       /* user:
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",

        },*/

        //ta properties twn spitiwn
        // price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos 
        price: 
        {
            type: Number,
            required: [true, 'Please add a name value']
        },
        
        rentFrequency:
        {
            type: String,
            required: [true, 'Please add a city value']
        },

        title:
        {
            type: String,
            required: [true, 'Please add a property type value (Rental/For sale)']
        },

        rooms:
        {
            type: Number,
            required: [true, 'Please add a room number']
        },

        baths:
        {
            type: Number,
            required: [true, 'Please add a price']
        },
        
        area:
        {
            type: Number,
            required: [true, 'Please add a price']
        },
        agency:
        {
            type: String,
            required: [false, 'Please add a price']
        },
        isVerified:
        {
            type: Boolean,
            required: [false, 'Please add a price']
        },        
        description:
        {
            type: String,
            required: [false, 'Please add a price']
        },        
        type:
        {
            type: String,
            required: [false, 'Please add a price']
        },
        purpose:
        {
            type: String,
            required: [false, 'Please add a price']
        },
        furnishingStatus:
        {
            type: String,
            required: [false, 'Please add a price']
        },
        amenities:
        {
            type: String,
            required: [false, 'Please add a price']
        },
        photos:
        {
            type: String,
            required: [false, 'Please add a price']
        },     
        city:
        {
            type: String,
            required: [true, 'Please add a city']
        }, 

    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Property', propertiesSchema, "Test")