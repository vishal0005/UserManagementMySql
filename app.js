require('dotenv').config();
const express = require('express');
const userRoute = require('./routes/user-routes');
const app = express();

app.use(express.json());
app.use("/user",userRoute);

app.listen(process.env.PORT,()=>{
    console.log("Server is running on port ",process.env.PORT);
}); 