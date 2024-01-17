const db = require('../database');

class Users{

    getAllUser(req,res){
        const users = db.execute("select * from user");
        return users;
    }


    addUser(req,res){
        const {name,email,password} = req.body;
        const newUser = db.query(
            "insert into user(name,email,password) values (?,?,?);",
            [name,email,password]);
        return newUser;
    }

}

module.exports = Users;