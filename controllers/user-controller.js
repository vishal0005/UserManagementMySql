const Users = require('../models/users');

class UserController {

    async getAllUser(req, res) {
        console.log("getAllUser called");
        
        const users =new Users();
        const [allUsers,_] =  await users.getAllUser()
        console.log("fetch user list", allUsers);
        if (allUsers) {
            return res.status(200).json({
                status: true,
                message: "fetch successsfully",
                data: allUsers
            });
        } else {
            return res.status(401).json({
                status: true,
                message: "error in fetch data"
            });
        }
    }
    async addUser(req, res) {
        console.log("addUser called");
        const users =new Users();
        const newUser =  await users.addUser(req,res);
        if (newUser) {
            return res.status(201).json({
                status: true,
                message: "user added successsfully",
                data: newUser
            });
        } else {
            return res.status(401).json({
                status: true,
                message: "error in add user"
            });
        }

    }

    async welcome(req, res) {
        console.log("welcome req");
        return res.status(200).json({
            status: true,
            message: "Welcome to api"
        });
    }

}


module.exports = UserController;