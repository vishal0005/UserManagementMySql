class UserController{

    async getAllUser(req,  res) {
        console.log("getAllUser req");
        return res.status(200).json({status: true,
        message : "fetch successsfully"});

    }
    
    async welcome (req,res){
        console.log("welcome req");
        return res.status(200).json({status: true,
        message : "Welcome to api"});
    }
    
}


module.exports = UserController;