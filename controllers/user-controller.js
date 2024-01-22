// const Users = require('../models/users');

class UserController {

    async welcome(req, res) {
        console.log("welcome req");
        return res.status(200).json({
            status: true,
            message: "Welcome to api updated"
        });
    }

    // async getAllUser(req, res) {
    //     console.log("getAllUser called");
        
    //     const users =new Users();
    //     const [allUsers,_] =  await users.getAllUser()
    //     console.log("fetch user list", allUsers);
    //     if (allUsers) {
    //         return res.status(200).json({
    //             status: true,
    //             message: "fetch successsfully",
    //             data: allUsers
    //         });
    //     } else {
    //         return res.status(401).json({
    //             status: true,
    //             message: "error in fetch data"
    //         });
    //     }
    // }
    // async addUser(req, res) {
    //     console.log("addUser called");
    //     const users =new Users();
    //     const [newUser,error] =  await users.addUser(req,res);
    //     if (newUser) {
    //         console.log("add user response : ",newUser);
    //         const userId = newUser.insertId;
    //         return res.status(201).json({
    //             status: true,
    //             message: "user added successsfully",
    //             data: {
    //                 id : userId
    //             }
    //         });
    //     } else {
    //         console.log("add user response error : ",error);
    //         if(error.code=='ER_DUP_ENTRY'){
    //             return res.status(401).json({
    //                 status: true,
    //                 message: "email address is already in use"
    //             });    
    //         }
    //         return res.status(401).json({
    //             status: true,
    //             message: error.sqlMessage
    //         });
    //     }
    // }

    // async deleteUser(req, res) {
    //     console.log("delete user called");
    //     const users =new Users();
    //     const [deletedUser,_] =  await users.deleteUser(req,res);
    //     console.log("deleted user ",deletedUser);
    //     if (deletedUser) {
    //         const totalRecordDeleted = deletedUser.affectedRows;
    //         if (totalRecordDeleted == 0) {
    //             return res.status(200).json({
    //                 status: true,
    //                 message: "user not found"
    //             });    
    //         }
    //         return res.status(204).json({
    //             status: true,
    //             message: "user deleted successsfully"
    //         });
    //     } else {
    //         return res.status(401).json({
    //             status: true,
    //             message: "error in delete user "+deletedUser
    //         });
    //     }
    // }

    // async deleteAllUser(req, res) {
    //     console.log("delete all user called");
    //     const users =new Users();
    //     const [deletedUser,_] =  await users.deleteAllUser(req,res);
    //     console.log("deleted user ",deletedUser);
    //     if (deletedUser) {
    //         const totalRecordDeleted = deletedUser.affectedRows;
    //         if (totalRecordDeleted == 0) {
    //             return res.status(200).json({
    //                 status: true,
    //                 message: "user not found"
    //             });    
    //         }
    //         return res.status(200).json({
    //             status: true,
    //             message: `total ${totalRecordDeleted} user deleted successsfully`
    //         });
    //     } else {
    //         return res.status(401).json({
    //             status: true,
    //             message: "error in delete all user "+deletedUser
    //         });
    //     }
    // }

    // async updateUser(req, res) {
    //     console.log("update user called");
    //     const users =new Users();
    //     const [updateUser,_] =  await users.updateUser(req,res);
    //     console.log("update User user ",updateUser);
    //     if (updateUser) {
    //         const totalRecordUpdated = updateUser.affectedRows;
    //         if (totalRecordUpdated == 0) {
    //             return res.status(200).json({
    //                 status: true,
    //                 message: "user not found"
    //             });    
    //         }
    //         return res.status(200).json({
    //             status: true,
    //             message: "User updated successfully"
    //         });
    //     } else {
    //         return res.status(401).json({
    //             status: true,
    //             message: "error in update user "+newUser
    //         });
    //     }
    // }
}

module.exports = UserController;