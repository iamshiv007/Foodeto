const router = require('express').Router()

// User
const user = require("./userRoute")
router.use('/', user)

// Shop
const partner = require("./partnerRoute")
router.use('/', partner)

// Product
const product = require("./productRoute")
router.use('/', product)

// Product
const rating = require("./ratingRoute")
router.use('/', rating)

module.exports = router