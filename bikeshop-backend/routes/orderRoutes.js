import express from 'express';
import { addOrderItems, getOrderById, updateOrderToPaid, 
    getMyOrders, getOrders, updateOrderToDelivered} from '../controllers/orderControllers.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router()

//route to register user
router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid)
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered)



export default router;