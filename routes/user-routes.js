const express = require('express');
const userRoute = express.Router();
const userController = require('../controllers/user-controller')

const UserController = new userController();

userRoute.get("/",UserController.welcome);
userRoute.get("/getAllUser",UserController.getAllUser);

module.exports = userRoute;