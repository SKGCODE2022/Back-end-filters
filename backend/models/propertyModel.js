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
            required: [true, 'Please add a price']
        },
        
        rentFrequency:
        {
            type: String,
            required: [true, 'Please add rent frequency']
        },

        // title:
        // {
        //     type: String,
        //     required: [true, 'Please add a title']
        // },

        rooms:
        {
            type: Number,
            required: [true, 'Please add a room number']
        },

        baths:
        {
            type: Number,
            required: [true, 'Please add a bath number']
        },
        
        area:
        {
            type: Number,
            required: [true, 'Please add a price']
        },
        // agency:
        // {
        //     type: String,
        //     required: [false, 'Please add a price']
        // },
        // isVerified:
        // {
        //     type: Boolean,
        //     required: [false, 'Please add a price']
        // },        
        // description:
        // {
        //     type: String,
        //     required: [false, 'Please add a price']
        // },        
        // type:
        // {
        //     type: String,
        //     required: [false, 'Please add a property type value (for-rent/for-sale)']
        // },
        purpose:
        {
            type: String,
            required: [true, 'Please add a purpose']
        },
        // furnishingStatus:
        // {
        //     type: String,
        //     required: [false, 'Please add a furnishing status']
        // },
        // amenities:
        // {
        //     type: String,
        //     required: [false, 'Please add amenities']
        // },
        // photos:
        // {
        //     type: String,
        //     required: [false, 'Please add a photo']
        // },     
        locationExternalIDs:
        {
            type: String,
            required: [true, 'Please add a city']
        }, 

    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Property', propertiesSchema, "Test2")