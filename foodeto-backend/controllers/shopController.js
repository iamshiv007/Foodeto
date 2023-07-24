const Shop = require('../models/shopModel')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('..//middleware/catchAsyncErrors')
const cloudinary = require('cloudinary')
const { sendTokenShop } = require('../utils/jwtToken')

// 1 Register a Shop
exports.registerShop = catchAsyncError(async (req, res, next) => {
    if (req.body.shopPicture) {
        var myCloud = await cloudinary.v2.uploader.upload(req?.body?.shopPicture, {
            folder: "Shops",
            width: 300,
            crop: "scale"
        })
    }

    const { shopName, ownerName, email, password, mobile } = req.body

    const shop = await Shop.create(req.body.shopPicture ? {
        shopName,
        ownerName,
        email,
        password,
        mobile,
        shopPicture: {
            public_id: myCloud?.public_id,
            url: myCloud?.secure_url
        }
    } : {
        shopName,
        ownerName,
        email,
        password,
        mobile
    }
    )

    sendTokenShop(shop, 201, res)
})

// 2 Login Shop
exports.loginShop = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body

    // Checking if Shop has given email and password both

    if (!email || !password) {
        return next(new ErrorHandler("Please Enter email & password", 400))
    }

    const shop = await shop.findOne({ email }).select("+password")

    if (!shop) {
        return next(new ErrorHandler("Invalid email or password", 401))
    }

    const isPasswordMatched = await shop.comparePassword(password)

    if (!isPasswordMatched) {
        return next(new ErrorHandler("Invalid email or password", 401))
    }

    sendToken(user, 200, res)
})

// 3 Logout User
exports.logout = catchAsyncError(async (req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: "Logged out"
    })
})

// 4 Get Shop detail
exports.getShopDetails = catchAsyncError(async (req, res, next) => {
    const shop = await Shop.findById(req.user.id)

    res.status(200).json({
        success: true,
        shop
    })
})