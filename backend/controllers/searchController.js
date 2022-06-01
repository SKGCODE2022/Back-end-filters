const asyncHandler = require('express-async-handler')

const Property = require('../models/propertyModel')

const getSearch = asyncHandler(async (req, res) => 
{   


    if(req.query.maxPrice)
    { 
        if(req.query.minPrice)
        {
            priceQuery = {price: {$lte: req.query.maxPrice} && {$gte: req.query.minPrice}}
        }    
        else {priceQuery = {price: {$lte: req.query.maxPrice}}}
    }
        else
        {
            if(req.query.minPrice)
            {
                priceQuery = {price: {$gte: req.query.minPrice}}
            }  
            else {priceQuery = null}
        }


    if(req.query.maxRooms)
    { 
        if(req.query.minRooms)
        {
            roomQuery = {rooms: {$lte: req.query.maxRooms} && {$gte: req.query.minRooms}}
        }    
        else {roomQuery = {rooms: {$lte: req.query.maxRooms}}}
    }
        else
        {
            if(req.query.minRooms)
            {
                roomQuery = {rooms: {$gte: req.query.minRooms}}
            }  
            else {roomQuery = null}
        }

    
    if(req.query.areaMax)
    { 
        if(req.query.areaMin)
        {
            areaQuery = {area: {$lte: req.query.areaMax} && {$gte: req.query.areaMin}}
        }    
        else {areaQuery = {area: {$lte: req.query.areaMax}}}
    }
        else
        {
            if(req.query.areaMin)
            {
                areaQuery = {area: {$gte: req.query.areaMin}}
            }  
            else {areaQuery = null}
        }


    const property =await Property.find(req.query).find(roomQuery).find(priceQuery).find(areaQuery)
    res.status(200).json(property)


})





module.exports = 
{
    getSearch, 
}




//         SELECT 
//     property_id, rooms, size, price
// FROM
//     properties
// WHERE
//     rooms > 3,
//     price > 900000