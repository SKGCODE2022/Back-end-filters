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


    if(req.query.roomsMax)
    { 
        if(req.query.roomsMin)
        {
            roomQuery = {rooms: {$lte: req.query.roomsMax} && {$gte: req.query.roomsMin}}
        }    
        else {roomQuery = {rooms: {$lte: req.query.roomsMax}}}
    }
        else
        {
            if(req.query.roomsMin)
            {
                roomQuery = {rooms: {$gte: req.query.roomsMin}}
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

        
    if(req.query.bathsMax)
    { 
        if(req.query.bathsMin)
        {
            bathQuery = {baths: {$lte: req.query.bathsMax} && {$gte: req.query.bathsMin}}
        }    
        else {bathQuery = {baths: {$lte: req.query.bathsMax}}}
    }
        else
        {
            if(req.query.bathsMin)
            {
                bathQuery = {baths: {$gte: req.query.bathsMin}}
            }  
            else {bathQuery = null}
        }

    if(req.query.sort == "price-asc")
        {
           sortQuery = {price: 1}
            console.log(req.query.sort)
        }
        else if(req.query.sort == "price-des")
        {
            sortQuery = {price: -1}
        }
        else if(req.query.sort == "date-asc")
        {
            sortQuery = {updatedAt: 1}
        }
        else if(req.query.sort == "date-desc")
        {
            sortQuery = {updatedAt: -1}
        }
        else if(!req.query.sort){sortQuery = null}
        

    const property =await Property.find(req.query).find(roomQuery).find(priceQuery).find(areaQuery).find(bathQuery).sort(sortQuery);
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