const express = require('express')
const router = express.Router()
const {getProperties, setProperty, updateProperty, deleteProperty} = require('../controllers/propertyController')


router.route('/').get(getProperties).post(setProperty)

router.route('/:id').put(updateProperty).delete(deleteProperty)


module.exports = router