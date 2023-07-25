const User = require('../models/userModel')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('..//middleware/catchAsyncErrors')
const cloudinary = require('cloudinary')
const { sendToken } = require('../utils/jwtToken')

// 1 Register a User
exports.registerUser = catchAsyncError(async (req, res, next) => {
    if (req.body.avatar) {
        var myCloud = await cloudinary.v2.uploader.upload(req?.body?.avatar, {
            folder: "Avatars",
            width: 150,
            crop: "scale"
        })
    }

    const { name, email, password, mobile } = req.body

    const user = await User.create(req.body.avatar ? {
        name,
        email,
        password,
        mobile,
        city,
        state,
        street,
        avatar: [{
            public_id: myCloud?.public_id,
            url: myCloud?.secure_url
        }]
    } : {
        name,
        email,
        password,
        mobile,
        city,
        state,
        street
    }
    )

    sendToken(user, 201, res)
})

// 2 Login User
exports.loginUser = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body

    // Checking if user has given email and password both

    if (!email || !password) {
        return next(new ErrorHandler("Please Enter email & password", 400))
    }

    const user = await User.findOne({ email }).select("+password")

    if (!user) {
        return next(new ErrorHandler("Invalid email or password", 401))
    }

    const isPasswordMatched = await user.comparePassword(password)

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

// 4 Get user detail
exports.getUserDetails = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.user.id)

    res.status(200).json({
        success: true,
        user
    })
})