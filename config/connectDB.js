const mongoose=require("mongoose");
// //require dotenv
require('dotenv').config({path:"./config/.env"})
//require env
const connectDB=async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{ useUnifiedTopology: true,useNewUrlParser: true, useCreateIndex: true })
        console.log("mongoose connected")
    } catch (error) {
        console.log(error)
    }
}
module.exports=connectDB


