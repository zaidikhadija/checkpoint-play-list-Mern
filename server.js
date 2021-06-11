const express=require ('express')
const mongoose=require('mongoose')
const connect=require("./config/connectDB")
const cors=require("cors")
const dotenv = require("dotenv");
dotenv.config();


//instanciation
const app=express()

//middelware
app.use(express.json())
app.use(cors())
//connect to DB
connect()
//routes
app.use("/api/items",require("./routes/api/item"))

//PORT
const port=8000
app.listen(port,()=>console.log(`Server is Running on port ${port}`))