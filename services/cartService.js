const Cart = require('../models/Cart');
const Product = require('../models/Product');

const getCartByUserId = async (userId) => {
    return await Cart.findOne({ userId }).populate('products.productId');
};

const addToCart = async (userId, productId, quantity) => {
    let cart = await Cart.findOne({ userId });
    const product = await Product.findById(productId);
    
    if (!product) throw new Error('Product not found');

    if (!cart) {
        cart = new Cart({ userId, products: [{ productId, quantity }] });
    } else {
        const existingProduct = cart.products.find(item => item.productId.equals(productId));
        if (existingProduct) {
            existingProduct.quantity += quantity;
        } else {
            cart.products.push({ productId, quantity });
        }
    }
    return await cart.save();
};

module.exports = {
    getCartByUserId,
    addToCart,
};
