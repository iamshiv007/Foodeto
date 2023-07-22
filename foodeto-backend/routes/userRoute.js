const express = require('express')
const { registerUser, loginUser, logout, getUserDetails } = require('../controllers/userController')
const { isAuthenticatedUser } = require('../middleware/auth')
const router = express.Router()

router.route('/user/register').post(registerUser)
router.route('/user/login').post(loginUser)
router.route('/user/logout').get(logout)
router.route('/user/me').get(isAuthenticatedUser, getUserDetails)

module.exports = router