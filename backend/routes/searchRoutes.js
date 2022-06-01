const express = require('express')
const router = express.Router()
const {getSearch} = require('../controllers/searchController')


router.route('/').get(getSearch)

// router.route('/:id').put(updateProperty).delete(deleteProperty)


module.exports = router