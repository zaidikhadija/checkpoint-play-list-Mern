const mongoose=require('mongoose')


const ItemSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
        
    },
  
    dateOfCreation:{
        type:Date,
        default:Date.now()
    }
})

module.exports=mongoose.model("Items",ItemSchema)