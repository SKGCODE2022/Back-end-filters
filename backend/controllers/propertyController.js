const asyncHandler = require('express-async-handler')

const Property = require('../models/propertyModel')

const getProperties = asyncHandler(async (req, res) => 
{
    const properties = await Property.find()


    res.status(200).json(properties)
})


const getSingleProperty = asyncHandler(async (req, res) =>
{
    const property = await Property.findById(req.params.id)


    res.status(200).json(property)
})


const setProperty = asyncHandler(async (req, res) => 
{   
    /*if(!req.body.name)
    {
        res.status(400)
        throw new Error('Please add a name field')
    }*/
    const property = await Property.create
    ({        
        price: req.body.price, 
        rentFrequency: req.body.rentFrequency, 
        rooms : req.body.rooms, 
        baths: req.body.baths, 
        area: req.body.area, 
        type: req.body.type,
        purpose: req.body.purpose,
        photos: req.body.photos,
        locationExternalIDs: req.body.locationExternalIDs,
        year: req.body.year,
        level: req.body.level,
        kitchens: req.body.kitchens,
        livingRooms: req.body.livingRooms,
        heat: req.body.heat,
        energyClass: req.body.energyClass,
        description: req.body.description,
        title: req.body.title,
        
    })
    res.status(200).json(property)
})

const updateProperty = asyncHandler(async (req, res) =>
{
    const property = await Property.findById(req.params.id)

    if(!property)
    {
        res.status(400)
        throw new Error('Goal not found.')
    }

    const updatedProperty = await Property.findByIdAndUpdate(req.params.id, req.body,{new: true,})


    res.status(200).json(updatedProperty)
})

const deleteProperty = asyncHandler(async (req, res) =>
{
    const property = await Property.findById(req.params.id)

    if(!property)
    {
        res.status(400)
        throw new Error('Goal not found.')
    }

    await property.remove()


    res.status(200).json({ id: req. params.id })
})


module.exports =
{
    getProperties, setProperty, updateProperty, deleteProperty, getSingleProperty
}