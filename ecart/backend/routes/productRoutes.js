import express from 'express';
const router = express.Router();
// import products from '../data/products.js';
import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';
import { getProduct, getProductById } from '../controllers/productController.js';

// @desc    Use controller to fetch all products
router.get('/', getProduct);
router.get('/:id', getProductById);


// @desc    Use productRoutes to fetch all products
// router.get('/', asyncHandler(async(req, res) => {
//   const products = await Product.find({});
//   res.json(products);
// }));

// router.get('/:id', asyncHandler(async(req, res) => {
//   // const product = products.find((p) => p._id === req.params.id)
//   const product = await Product.findById(req.params.id);
//   if(product){
//     res.json(product);
//   }else{
//     res.status(404);
//     throw new Error('Resource not found');
//   } 
// }));



export default router;
