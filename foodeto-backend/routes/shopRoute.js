const express = require('express')
const { isAuthenticatedShop } = require('../middleware/auth')
const { registerShop, loginShop, logout, getShopDetails } = require('../controllers/shopController')
const router = express.Router()

router.route('/shop/register').post(registerShop)
router.route('/shop/login').post(loginShop)
router.route('/shop/logout').get(logout)
router.route('/shop/me').get(isAuthenticatedShop, getShopDetails)

module.exports = router