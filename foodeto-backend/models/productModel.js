const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    shop: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref:"Shop"
    },
    productName: {
        type: String,
        required: true
    },
    image: [{
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
    }
})

module.exports = mongoose.model('Product', productSchema)