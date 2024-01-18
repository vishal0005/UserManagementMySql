const express = require('express');
const userRoute = express.Router();
const userController = require('../controllers/user-controller')

const UserController = new userController();

userRoute.get("/",UserController.welcome);
userRoute.get("/getAllUser",UserController.getAllUser);
userRoute.post("/addUser",UserController.addUser);
userRoute.delete("/deleteUser/:id",UserController.deleteUser);
userRoute.delete("/deleteAllUser",UserController.deleteAllUser);
userRoute.put("/udpateUser",UserController.updateUser);

module.exports = userRoute;