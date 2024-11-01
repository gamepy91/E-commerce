const cartService = require('../services/cartService');

const getCart = async (req, res) => {
    try {
        const cart = await cartService.getCartByUserId(req.user.id);
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addToCart = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const cart = await cartService.addToCart(req.user.id, productId, quantity);
        res.status(200).json(cart);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getCart,
    addToCart,
};