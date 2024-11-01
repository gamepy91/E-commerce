const Order = require('../models/Order');
const Cart = require('../models/Cart');

const placeOrder = async (userId) => {
    const cart = await Cart.findOne({ userId }).populate('products.productId');
    if (!cart) throw new Error('No items in cart');

    const totalPrice = cart.products.reduce((total, item) => 
        total + item.productId.price * item.quantity, 0);

    const order = new Order({
        userId,
        products: cart.products,
        totalPrice,
    });

    await order.save();
    await Cart.findByIdAndDelete(cart._id);

    return order;
};

const getOrderHistory = async (userId) => {
    return await Order.find({ userId }).populate('products.productId');
};

module.exports = {
    placeOrder,
    getOrderHistory,
};
