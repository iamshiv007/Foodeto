const mongoose = reqiure("mongoose")

const ratingSchema = mongoose.schema({
    user: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref:"User"
    },
    product: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref:'Product'
    },
    rating: {
        type: Number,
        required: true
    },
    message: {
        type: String
    }
})

module.exports = mongoose.model('Rating', ratingSchema)