const asyncHandler = require('express-async-handler')

const Property = require('../models/propertyModel')

const getSearch = asyncHandler(async (req, res) => 
{   

// price filters
    if(req.query.maxPrice)
    { 
        priceQueryMax = {price: {$lte: req.query.maxPrice}}
    }
    else {priceQueryMax = null}

    if(req.query.minPrice)
    {
        priceQueryMin = {price: {$gte: req.query.minPrice}}
    }  
    else {priceQueryMin = null}   


//room filters
    if(req.query.roomsMax)
    { 
        roomQueryMax = {room: {$lte: req.query.roomsMax}}
    }
    else {roomQueryMax = null}

    if(req.query.roomsMin)
    {
        roomQueryMin = {room: {$gte: req.query.roomsMin}}
    }  
    else {roomQueryMin = null}   


//area filters
    if(req.query.areaMax)
    { 
        areaQueryMax = {area: {$lte: req.query.areaMax}}
    }
    else {areaQueryMax = null}

    if(req.query.areaMin)
    {
        areaQueryMin = {area: {$gte: req.query.areaMin}}
    }  
    else {areaQueryMin = null}

 //bath filters
 if(req.query.bathsMax)
 { 
     bathQueryMax = {baths: {$lte: req.query.bathsMax}}
 }
 else {bathQueryMax = null}

 if(req.query.bathsMin)
 {
     bathQueryMin = {baths: {$gte: req.query.bathsMin}}
 }  
 else {bathQueryMin = null}     


if(req.query.sort == "price-asc")
    {
        sortQuery = {price: 1}
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
        

    const property =await Property.find(req.query).find(roomQueryMin).find(roomQueryMax).find(priceQueryMax).find(priceQueryMin).find(areaQueryMin).find(areaQueryMax).find(bathQueryMin).find(bathQueryMax).sort(sortQuery);
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