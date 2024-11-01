const express = require('express');
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/place', authMiddleware, orderController.placeOrder);
router.get('/history', authMiddleware, orderController.getOrderHistory);

module.exports = router;
