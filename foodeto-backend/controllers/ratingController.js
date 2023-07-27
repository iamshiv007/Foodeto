const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const Rating = require('../models/ratingModel')

exports.newRating = catchAsyncErrors(async (req, res, next) => {

    const oldRating = await Rating.findOne({ user: req.user.id })

    if (oldRating) {
        const rating = await Rating.findByIdAndUpdate(oldRating.id, req.body)

        return res.status(200).json({ success: true, message: "Rating Updated", rating })
    }

    const rating = await Rating.create({ user: req.user._id, ...req.body })

    res.status(201).json({ success: true, message: "Rating Created", rating })
})

exports.getProductRatings = catchAsyncErrors(async (req, res, next) => {

    const { product } = req.body

    const ratings = await Rating.find({ product })

    res.status(200).json({ success: true, ratings })
})
