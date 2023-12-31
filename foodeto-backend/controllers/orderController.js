const Order = require('../models/orderModel')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('../middleware/catchAsyncErrors')

// 1. Create New Order

exports.newOrder = catchAsyncError(async (req, res, next) => {
    const {
        shippingInfo,
        items,
        paymentInfo,
        discount,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    } = req.body

    const order = await Order.create({
        shippingInfo,
        items,
        paymentInfo,
        discount,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paidAt: Date.now(),
        user: req.user._id
    })

    res.status(201).json({
        success: true,
        order
    })
})

// 2. Get Single order

exports.getSingleOrder = catchAsyncError(async (req, res, next) => {
    const order = await Order.findById(req.params.id).populate(
        'user',
        "name email"
    )

    if (!order) {
        return next(new ErrorHandler("Order not Found with this id", 404))
    }

    res.status(200).json({
        success: true,
        order
    })
})

// 3. Get logged in user's Orders
exports.myOrders = catchAsyncError(async (req, res, next) => {
    const orders = await Order.find({ user: req.user._id })

    res.status(200).json({
        success: true,
        orders
    })
})

// 4. Get all orders -- admin
exports.getAllOrders = catchAsyncError(async (req, res, next) => {
    const orders = await Order.find()

    let totalAmount = 0

    orders.forEach((order) => {
        totalAmount += order.totalPrice
    })

    res.status(200).json({
        success: true,
        totalAmount,
        orders
    })
})

// 5. Update Order status -- admin
exports.updateOrder = catchAsyncError(async (req, res, next) => {
    const order = await Order.findById(req.params.id)


    if (!order) {
        return next(new ErrorHandler("Order not found with this id", 404))
    }

    if (order.orderStatus === "Delivered") {
        return next(new ErrorHandler("You have already delivered this order", 404))
    }

    order.orderStatus = req.body.status

    if (req.body.status === 'Delivered') {
        order.deliveredAt = Date.now()
    }

    await order.save({ validateBeforeSave: false })

    res.status(200).json({
        success: true
    })

})

// 6. Delete Order -- admin

exports.deleteOrder = catchAsyncError(async (req, res, next) => {
    const order = await Order.findById(req.params.id)

    if (!order) {
        return next(new ErrorHandler("Order not found with this id", 404))
    }

    await Order.findByIdAndDelete(req.params.id)

    res.status(200).json({
        success: true
    })
}) 