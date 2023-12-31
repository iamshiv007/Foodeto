const express = require('express')
const { isAuthenticatedPartner } = require('../middleware/auth')
const { createProduct, getAllProducts, getPartnerProducts, getProductDetails, updateProduct, deleteProduct } = require('../controllers/productController')
const router = express.Router()

router.route('/partner/product/new').post(isAuthenticatedPartner, createProduct)
router.route('/products').get(getAllProducts)
router.route('/partner/products/:id').get(getPartnerProducts)
router.route('/product/:id').get(getProductDetails)
router.route('/partner/product/:id').put(isAuthenticatedPartner, updateProduct).delete(isAuthenticatedPartner, deleteProduct)

module.exports = router