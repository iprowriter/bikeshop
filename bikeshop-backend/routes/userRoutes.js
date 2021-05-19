import express from 'express';
import { authUser, registerUser, getUserProfile, 
    updateUserProfile, getUsers, deleteUser,
getUserById, updateUser } from '../controllers/userControllers.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router()

//route to register user
router.route('/').post(registerUser).get(protect, admin, getUsers)

router.route('/:id').delete(protect, admin, deleteUser).get(protect,
     admin, getUserById).put(protect, admin, updateUser)




// route for all products 
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)



export default router;