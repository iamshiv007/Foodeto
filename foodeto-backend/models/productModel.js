const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    partner: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "Partner"
    },
    productName: {
        type: String,
        required: true,
        unique: true
    },
    productImage: [{
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }],
    time: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true,
        default: 0
    },
    status: {
        type: String,
        required: true,
        default: "Available"
    },
    category: {
        type: String,
        required: true
    },
    pieces: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Product', productSchema)