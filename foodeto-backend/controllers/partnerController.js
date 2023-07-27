const Partner = require('../models/partnerModel')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('../middleware/catchAsyncErrors')
const cloudinary = require('cloudinary')
const { sendTokenPartner } = require('../utils/jwtToken')

// 1 Register a Partner
exports.registerPartner = catchAsyncError(async (req, res, next) => {
    if (req.body.shopImage) {
        var myCloud = await cloudinary.v2.uploader.upload(req?.body?.shopImage, {
            folder: "Shops",
            width: 300,
            crop: "scale"
        })
    }

    const { shopName, partnerName, email, password, mobile, city, state, street } = req.body

    const partner = await Partner.create(req.body.shopImage ? {
        shopName,
        partnerName,
        email,
        password,
        mobile,
        city,
        state,
        street,
        shopImage: [{
            public_id: myCloud?.public_id,
            url: myCloud?.secure_url
        }]
    } : {
        shopName,
        partnerName,
        email,
        password,
        mobile,
        city,
        state,
        street
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

// 3 Logout Partner
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

// 4 Forgot Password
exports.forgotPassword = catchAsyncError(async (req, res, next) => {
    const partner = await Partner.findOne({ email: req.body.email })

    if (!partner) {
        return next(new ErrorHandler("Partner Not found", 404))
    }


    // Get reset password token
    const resetToken = partner.getResetPasswordToken()

    await partner.save({ validateBeforeSave: false })

    const resetPasswordUrl = `${process.env.FRONTEND_URL}/password/reset/${resetToken}`

    const message = `Your password reset token is :- \n\n${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`

    try {
        sendEmail({
            email: partner.email,
            subject: "Ecommerce Password Recovery",
            message
        })

        res.status(200).json({
            success: true,
            message: `Email  sent to ${partner.email} successfully`
        })
    } catch (error) {
        partner.resetPasswordToken = undefined
        partner.resetPasswordExpire = undefined

        await partner.save({ validateBeforeSave: false })

        return next(new ErrorHandler(error.message, 500))
    }
})

// 5 Reset password
exports.resetPassword = catchAsyncError(async (req, res, next) => {
    // creating token hash
    const resetPasswordToken = crypto
        .createHash('sha256')
        .update(req.params.token)
        .digest("hex")

    const partner = await Partner.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() }
    })

    if (!partner) {
        return next(
            new ErrorHandler(
                "Reset passwor token is invalid or has been expired",
                400
            ))
    }

    if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandler("Password does not match", 400))
    }

    partner.password = req.body.password
    partner.resetPasswordToken = undefined
    partner.resetTokenExpire = undefined

    await Partner.save()

    sendToken(partner, 200, res)
})


// 6. Get Partner detail
exports.getPartnerDetails = catchAsyncError(async (req, res, next) => {
    const partner = await Partner.findById(req.partner.id)

    res.status(200).json({
        success: true,
        partner
    })
})

// 7 Update partner password
exports.updatePassword = catchAsyncError(async (req, res, next) => {
    const partner = await Partner.findById(req.partner.id).select("+password")

    const isPasswordMatch = await partner.comparePassword(req.body.oldPassword)

    if (!isPasswordMatch) {
        return next(new ErrorHandler("Password does not match", 400))
    }

    if (req.body.newPassword !== req.body.confirmPassword) {
        return next(new ErrorHandler("Password does not match", 400))
    }

    partner.password = req.body.newPassword

    await partner.save()

    sendToken(partner, 200, res)
})

// 8 Update Partner Profile
exports.updateProfile = catchAsyncError(async (req, res, next) => {
    const newPartnerData = req.body

    if (req.body.shopImage !== "") {
        const partner = await Partner.findById(req.partner.id)

        const imageId = partner.avatar.public_id

        await cloudinary.v2.uploader.destroy(imageId)

        const myCloud = await cloudinary.v2.uploader.upload(req.body.shopImage, {
            folder: "Shops",
            width: 300,
            crop: "scale"
        })

        newPartnerData.shopImage = {
            public_id: myCloud.public_id,
            url: myCloud.secure_url
        }
    }

    const partner = await Partner.findByIdAndUpdate(req.partner.id, newPartnerData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        partner
    })
})

// 9 Get all Partners -- admin
exports.getAllPartners = catchAsyncError(async (req, res, next) => {
    const partners = await Partner.find()

    res.status(200).json({
        success: true,
        partners
    })
})

// 10 Get single partner -- admin
exports.getSinglePartner = catchAsyncError(async (req, res, next) => {
    const partner = await Partner.findById(req.params.id)

    if (!partner) {
        return next(
            new ErrorHandler(`Partner is not axist with this Partner id : ${req.params.id}}`)
        )
    }

    res.status(200).json({
        success: true,
        partner
    })
})