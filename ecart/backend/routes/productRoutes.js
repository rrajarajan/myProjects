import express from 'express';
const router = express.Router();
// import products from '../data/products.js';
import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';
import { getProduct, getProductById } from '../controllers/productController.js';

// @desc    Use controller to fetch all products
router.get('/', getProduct);
router.get('/:id', getProductById);

export default router;
