const express = require('express')
const router = express.Router()
const {getProperties, setProperty, updateProperty, deleteProperty, getSingleProperty} = require('../controllers/propertyController')


router.route('/').get(getProperties).post(setProperty)
router.route('/:id').put(updateProperty).delete(deleteProperty).get(getSingleProperty)


module.exports = router