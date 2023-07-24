const express = require('express')
const { isAuthenticatedPartner } = require('../middleware/auth')
const { loginPartner, registerPartner, logoutPartner, getPartnerDetails } = require('../controllers/partnerController')
const router = express.Router()

router.route('/partner/register').post(registerPartner)
router.route('/partner/login').post(loginPartner)
router.route('/partner/logout').get(logoutPartner)
router.route('/partner/me').get(isAuthenticatedPartner, getPartnerDetails)

module.exports = router