// ## All Auth APIs

// - [x]  #1 /login - post
// - [x]  #2 /logout- delete
// - [x]  #3 /admin/addAdminUser - post 
// - [x]  #4 /admin/deleteAdminUser - delete - delete admin user
// - [x]  #5 /admin/getAllUsers - get - list all users

const User = require('../models/userModel');
require('dotenv').config(); 

const login = (req, res) => {
    const { type , password } = req.body;

    if (type === 'admin' && password === process.env.ADMIN_PASSWORD) {
        res.status(200).json({ message: 'Successful login', redirectUrl: '/api/search/getFeaturedSnippets' });
    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
};

const logout = (req, res) => {
    //logout logic 
    res.status(200).json({ message: 'Logout successful' });
};

const addAdminUser = async (req, res) => {
    const admin = new User(req.body);
    const { type } = req.body;

    if (req.body.type !== 'admin') {
        return res.status(400).json({
            success: false,
            message: 'User must be of type admin'
        });
    }

    try {
        await admin.save();

        res.json(admin);

        res.status(200).json({
            success: true,
            message: `${type} User Created`,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const deleteAdminUser = async (req, res) => {
    try{
        const admin_id = req.params.id;
        await User.findByIdAndDelete(admin_id);
        res.status(200).json({
            success: true,
            message: 'Admin User Deleted'
        });
    }
    catch(error){
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    login,
    logout,
    getAllUsers,
    addAdminUser,
    deleteAdminUser
};