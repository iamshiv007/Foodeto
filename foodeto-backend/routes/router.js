const router = require('express').Router()

// User
const user = require("./userRoute")
router.use('/', user)

// Shop
const partner = require("./partnerRoute")
router.use('/', partner)

module.exports = router