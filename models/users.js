const db = require('../database');

class Users{

    getAllUser(req,res){
        const users = db.execute("select * from user");
        return users;
    }


    async addUser(req,res){
        const {name,email,password} = req.body;
        try {
            const [user,_] = await db.query(
                "insert into user(name,email,password) values (?,?,?);",
                [name,email,password]);   
            return [user,false];
        } catch (error) {
            console.error("add user errov : ",error.code);
            return [false,error];
        }
    }

    deleteUser(req,res){
        const userId = req.params.id;
        return db.query("DELETE FROM user WHERE id = ?;",userId);
    }

    deleteAllUser(req,res){
        return db.query("DELETE FROM user;");
    }

    updateUser(req,res){
        // connection.query('UPDATE users SET ? WHERE UserID = ?', [{ Name: name }, userId])
        const {id,name,email} = req.body;
        return db.query("update user set ?,? where id = ?;",
        [{name : name},{email : email},id]);
    }

}

module.exports = Users;