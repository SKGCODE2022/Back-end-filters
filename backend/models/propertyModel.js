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
       
        purpose:
        {
            type: String,
            required: [true, 'Please add a purpose']
        },
        locationExternalIDs:
        {
            type: String,
            required: [true, 'Please add a city']
        }, 
        year:
        {
            type: Number,
            required: [true, 'Please add a year']
        },
        level:
        {
            type: Number,
            required: [true, 'Please add the property floor']
        },
        kitchens:
        {
            type: Number,
            required: [true, 'Please add a kitchen number']
        },  
         livingRooms:
        {
            type: Number,
            required: [true, 'Please add a living room number']
        },
        heat:
        {
            type: String,
            required: [true, 'Please add a heating method']
        },        
        energyClass:
        {
            type: String,
            required: [true, 'Please add an energy class']
        },        
        description:
        {
            type: String,
            required: [true, 'Please add a description)']
        },   
        title:
        {
            type: String,
            required: [true, 'Please add a title)']
        }, 
        coverPhoto:
        {
            type: String,
            required: [false, 'Please add a photo url)']
        },
        photo1:
        {
            type: String,
            required: [false, 'Please add a photo url)']
        },
        photo2:
        {
            type: String,
            required: [false, 'Please add a photo url)']
        },
        photo3:
        {
            type: String,
            required: [false, 'Please add a photo url)']
        },
        photo4:
        {
            type: String,
            required: [false, 'Please add a photo url)']
        },
        agency: 
        {
            type: String,
            required: [false, 'Please add an agency)']
        },
        telNumber: 
        {
            type: Number,
            required: [false, 'Please add an telephone number)']
        },
        latitude:        
        {
            type: Number,
            required: [false, 'Please add an latitude)']
        },

        longitude:
        {
            type: Number,
            required: [false, 'Please add an longitude)']
        },

    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Property', propertiesSchema, "REDB")