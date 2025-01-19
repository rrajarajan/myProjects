import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';

// @desc    Login User & getToken
// @route   POST /api/user/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password} = req.body
    const user = await User.findOne({email});
    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
    // res.send('auth user');
});

// @desc    Register User                                                                                                                                                                                                                                                                                                                                                                                                                                                               
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    res.send('register user');
});

// @desc    Logout user / clear cookie
// @route   POST /api/user/logout
// @access  Public
const logoutUser = asyncHandler(async (req, res) => {
    res.send('logout user');
});

// @desc    get user profile
// @route   GET /api/user/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
    res.send('user profile');
});

// @desc    UPDATE user
// @route   PUT /api/user
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.send('update user profile');
});

// @desc    GET user by id
// @route   GET /api/user/:id
// @access  Private/ Admin
const getUserById = asyncHandler(async (req, res) => {
    res.send('get user by id');
});

// @desc    GET user
// @route   GET /api/user/
// @access  Private/ Admin
const getUsers = asyncHandler(async (req, res) => {
    res.send('get user');
});


// @desc    DELETE user profile
// @route   DELETE /api/user/
// @access  Private/ Admin
const deleteUser = asyncHandler(async (req, res) => {
    res.send('delete user');
});

// @desc    UPDATE user profile
// @route   PUT /api/user/
// @access  Private/ Admin
const updateUser = asyncHandler(async (req, res) => {
    res.send('update user');
});

export {
    loginUser,
    getUserProfile,
    registerUser,
    logoutUser,
    updateUserProfile,
    getUserById,
    getUsers,
    deleteUser,
    updateUser 
}