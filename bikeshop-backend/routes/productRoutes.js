import express from 'express';
import { getProducts, getProductsById, 
    deleteProduct, createProduct, updateProduct,
createProductReview, getTopProducts } from '../controllers/productControllers.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router()


// route for all products 
router.route('/').get(getProducts).post(protect, admin, createProduct);

// route for post new reviews
router.route('/:id/reviews').post(protect, createProductReview);

router.get('/top', getTopProducts)

//route for a single products
router.route('/:id').get(getProductsById).delete(protect, admin, deleteProduct).put(protect, admin, updateProduct);


export default router;