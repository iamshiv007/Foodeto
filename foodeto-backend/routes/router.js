const router = require('express').Router()

// User
const user = require("./userRoute")
router.use('/', user)

// Shop
const shop = require("./shopRoute")
router.use('/', shop)

module.exports = router