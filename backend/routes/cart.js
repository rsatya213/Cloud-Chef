const express = require('express');
const { addItemToCart, addMultipleItemsToCart, getCartItems, deleteItemFromCart, updateItemQuantity } = require('../controllers/cartController');
const requireAuth = require('../middleware/authMiddleware');
const router = express.Router();

router.use(requireAuth); // Apply auth middleware to all routes

// POST add an item to the cart
router.post('/add', addItemToCart);

// POST add multiple items to the cart
router.post('/add-multiple', addMultipleItemsToCart);

// GET all cart items
router.get('/', getCartItems);

// DELETE an item from the cart
router.delete('/delete', deleteItemFromCart);

// POST update item quantity in the cart
router.post('/update', updateItemQuantity);

module.exports = router;