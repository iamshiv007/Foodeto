const Product = require('../models/productModel')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('../middleware/catchAsyncErrors')
const cloudinary = require('cloudinary')

// 1 Create Product
exports.createProduct = catchAsyncError(async (req, res, next) => {

    const { productImage, ...rest } = req.body

    if (productImage) {
        var myCloud = await cloudinary.v2.uploader.upload(productImage, {
            folder: "Products"
        })
    }

    const product = await Product.create(productImage ? {
        partner: req.partner._id,
        ...rest,
        productImage: [{
            public_id: myCloud?.public_id,
            url: myCloud?.secure_url
        }]
    } : {
        partner: req.partner._id,
        ...rest
    }
    )

    res.status(201).json({ success: true, message: "Product Created Successfully", product })
})

// 2. Get All products

exports.getAllProducts = catchAsyncError(async (req, res, next) => {
    let { query, page, category, address } = req.query;
    const productsPerPage = 8;
    page = parseInt(page) || 1
    const skip = (page - 1) * productsPerPage

    let queryObj = {};
    if (query) {
        queryObj.$or = [
            { productName: { $regex: query, $options: 'i' } },
            { category: { $regex: query, $options: 'i' } }
        ];
    }
    if (category) {
        queryObj.category = category;
    }

    const products = await Product.find(queryObj)
        .skip(skip)
        .limit(productsPerPage)
        .populate('partner');


    const totalResults = await Product.countDocuments(queryObj)

    if (products.length === 0) {
        return res.status(200).json({ success: true, message: "Product Not Found" })
    }

    res.status(200).json({ totalResults, pageResult: products.length, success: true, products: products })

})

// 3. Get Partner Products

exports.getPartnerProducts = catchAsyncError(async (req, res, next) => {

    const totalProducts = await Product.countDocuments({ partner: req.params.id })

    const products = await Product.find({ partner: req.params.id }).populate('partner')

    res.status(200).json({ success: true, totalProducts, products })
})

// 4. Get Product Details

exports.getProductDetails = catchAsyncError(async (req, res, next) => {

    const { id } = req.params

    const productDetails = await Product.findById(id).populate("partner")

    res.status(200).json({ success: true, productDetails })

})

// 5. Update Product -- Partner

exports.updateProduct = catchAsyncError(async (req, res, next) => {
    const { id } = req.params

    let newProductData = req.body

    const product = await Product.findById(id)


    if (!product) {
        return next(new ErrorHandler("Product Not Found"), 404)
    }

    if (!product.partner.equals(req.partner._id)) {
        return next(new ErrorHandler("You Are Not Able to Update this product"), 401)
    }

    if (req.body.productImage) {

        const imageId = product.productImage[0]?.public_id

        if (imageId) {
            await cloudinary.v2.uploader.destroy(imageId)
        }

        const myCloud = await cloudinary.v2.uploader.upload(req.body.productImage, {
            folder: "Products"
        })

        newProductData.productImage = {
            public_id: myCloud.public_id,
            url: myCloud.secure_url
        }
    }

    const updatedProduct = await Product.findByIdAndUpdate(id, newProductData)

    res.status(200).json({ success: true, message: "Product Updated", updatedProduct })

})

// 6. Product Delete -- Partner

exports.deleteProduct = catchAsyncError(async (req, res, next) => {
    const { id } = req.params

    const product = await Product.findById(id)

    if (!product) {
        return next(new ErrorHandler("Product Not Found"), 404)
    }

    if (!product.partner.equals(req.partner._id)) {
        return next(new ErrorHandler("You Are Not Able to delete this product"), 401)
    }

    const deletedProduct = await Product.findByIdAndDelete(id)

    const deletedRatings = await Rating.deleteMany({ product: id });

    res.status(200).json({ success: true, message: "Product Deleted", deletedProduct, deletedRatings })
})