const Partner = require('../models/partnerModel')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('../middleware/catchAsyncErrors')
const cloudinary = require('cloudinary')
const { sendTokenPartner } = require('../utils/jwtToken')

// 1 Register a Partner
exports.registerPartner = catchAsyncError(async (req, res, next) => {
    if (req.body.shopPicture) {
        var myCloud = await cloudinary.v2.uploader.upload(req?.body?.shopPicture, {
            folder: "Shops",
            width: 300,
            crop: "scale"
        })
    }

    const { shopName, partnerName, email, password, mobile } = req.body

    const partner = await Partner.create(req.body.shopPicture ? {
        shopName,
        partnerName,
        email,
        password,
        mobile,
        shopPicture: {
            public_id: myCloud?.public_id,
            url: myCloud?.secure_url
        }
    } : {
        shopName,
        partnerName,
        email,
        password,
        mobile
    }
    )

    sendTokenPartner(partner, 201, res)
})

// 2 Login Partner
exports.loginPartner = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body

    // Checking if Partner has given email and password both

    if (!email || !password) {
        return next(new ErrorHandler("Please Enter email & password", 400))
    }

    const partner = await Partner.findOne({ email }).select("+password")

    if (!partner) {
        return next(new ErrorHandler("Invalid email or password", 401))
    }

    const isPasswordMatched = await partner.comparePassword(password)

    if (!isPasswordMatched) {
        return next(new ErrorHandler("Invalid email or password", 401))
    }

    sendTokenPartner(partner, 200, res)
})

// 3 Logout User
exports.logoutPartner = catchAsyncError(async (req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: "Logged out"
    })
})

// 4 Get Partner detail
exports.getPartnerDetails = catchAsyncError(async (req, res, next) => {
    const partner = await Partner.findById(req.partner.id)

    res.status(200).json({
        success: true,
        partner
    })
})