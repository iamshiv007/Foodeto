const User = require('../models/userModel')
const Partner = require('../models/partnerModel')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('./catchAsyncErrors')
const jwt = require('jsonwebtoken')

exports.isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
    const { token } = req.cookies

    if (!token) {
        return next(new ErrorHandler("Please login to access this resource", 401))
    }

    const decodedData = await jwt.verify(token, process.env.JWT_SECRET)

    req.user = await User.findById(decodedData.id)

    next()
})

exports.isAuthenticatedPartner = catchAsyncError(async (req, res, next) => {
    const { token } = req.cookies

    if (!token) {
        return next(new ErrorHandler("Please login to access this resource", 401))
    }

    const decodedData = await jwt.verify(token, process.env.JWT_SECRET)
    req.partner = await Partner.findById(decodedData.id)
    next()
})

exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(new ErrorHandler(`Role : ${req.user.role} not allow to access this resource`, 403))
        }

        next()
    }
}
