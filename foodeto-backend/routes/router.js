const router = require('express').Router()

// User
const user = require("./userRoute")
router.use('/', user)

module.exports = router