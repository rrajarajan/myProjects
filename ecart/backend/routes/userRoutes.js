import express from 'express';
import {
  loginUser,
  getUserProfile,
  registerUser,
  logoutUser,
  updateUserProfile,
  getUserById,
  getUsers,
  deleteUser,
  updateUser 
} from '../controllers/userController.js';

const router = express.Router();

router.route('/').post(registerUser).get(getUsers);
router.post('/logout', logoutUser);
router.post('/login', loginUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);
router.route('/:id').delete(deleteUser).get(getUserById).put(updateUser);

export default router;
