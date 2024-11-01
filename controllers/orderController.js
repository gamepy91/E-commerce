const orderService = require('../services/orderService');

const placeOrder = async (req, res) => {
    try {
        const order = await orderService.placeOrder(req.user.id);
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getOrderHistory = async (req, res) => {
    try {
        const orders = await orderService.getOrderHistory(req.user.id);
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    placeOrder,
    getOrderHistory,
};