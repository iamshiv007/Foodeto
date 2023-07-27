const express = require('express')
const { isAuthenticatedUser } = require('../middleware/auth')
const { newRating, getProductRatings } = require('../controllers/ratingController')
const router = express.Router()

router.route('/rating/new').post(isAuthenticatedUser, newRating)
router.route('/ratings').get(getProductRatings)


module.exports = router