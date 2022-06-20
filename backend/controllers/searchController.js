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
        roomQueryMax = {rooms: {$lte: req.query.roomsMax}}
    }
    else {roomQueryMax = null}

    if(req.query.roomsMin)
    {
        roomQueryMin = {rooms: {$gte: req.query.roomsMin}}
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

  //year filters
  if(req.query.yearMax)
  { 
      yearQueryMax = {year: {$lte: req.query.yearMax}}
  }
  else {yearQueryMax = null}
 
  if(req.query.yearMin)
  {
      yearQueryMin = {year: {$gte: req.query.yearMin}}
  }  
  else {yearQueryMin = null}

//level filters
  if(req.query.levelMax)
  { 
      levelQueryMax = {level: {$lte: req.query.levelMax}}
  }
  else {levelQueryMax = null}
 
  if(req.query.levelMin)
  {
    levelQueryMin = {level: {$gte: req.query.levelMin}}
  }  
  else {levelQueryMin = null}
 
  //agency filters
  if(req.query.agency == "all")
    {
        agencyQuery = {agency: ['Picket Fence Realty', 'Stellar Property Advisors', 'Anchor Group Real Estate', 'Olive Tree Realty', 'Equinox Realty Advisors', 'Bold Realty']}
    }
  else if (req.query.agency){ 
      agencyQuery = {agency: req.query.agency}
  }
  else { 
    agencyQuery = null
}

//location query
if(req.query.locationExternalIDs == "all")
{
    locationExternalIDsQuery = {locationExternalIDs: ['athens', 'thessaloniki', 'heraklion']}
}
else if (req.query.locationExternalIDs){ 
    locationExternalIDsQuery = {locationExternalIDs: req.query.locationExternalIDs}
}
else { 
    locationExternalIDsQuery = null
}


//purpose query
if(req.query.purpose == "all")
{
    purposeQuery = {purpose: ['for-rent', 'for-sale']}
}
else if (req.query.purpose){ 
    purposeQuery = {purpose: req.query.purpose}
}
else { 
    purposeQuery = null
}

 
  

//sort
if(req.query.sort == "price-asc")
    {
        sortQuery = {price: 1}
    }
    else if(req.query.sort == "price-desc")
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

    // if(req.query.hitsPerPage == 6)
    //     {
    //         limitQuery = query.limit(number)
    //     }
        

    const property =await Property.find(req.query).find(purposeQuery).find(agencyQuery).find(locationExternalIDsQuery).find(roomQueryMin).find(roomQueryMax).find(levelQueryMin).find(levelQueryMax).find(yearQueryMin).find(yearQueryMax).find(priceQueryMax).find(priceQueryMin).find(areaQueryMin).find(areaQueryMax).find(bathQueryMin).find(bathQueryMax).sort(sortQuery).limit(req.query.limit);
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