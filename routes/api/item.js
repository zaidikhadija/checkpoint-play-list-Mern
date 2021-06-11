const express =require('express')

const router=express.Router()
//require Schema
const Item=require("../../models/Item")



// @ path:  http://localhost:8000/api/items/
// get all items
// accés public/private
router.get("/",async(req,res)=>{
    try{
        const item=await Item.find()
res.json({msg:"data fetched",item})    
}
catch(err){console.log(err)}})

///******* ***/
// @ path:  http://localhost:8000/api/items/additem
//  add new item
// accés public/private
router.post("/additem",async(req,res)=>{
    try{
        const newItem=await new Item({...req.body})
        const item=await newItem.save()
res.json({msg:"item added ",item})    
}
catch(err){console.log(err)}})


//****************** */
// @ path:  http://localhost:8000/api/items/editItem/:id
//  edit item(put)
// accés public/private
router.put("/editItem/:id",async(req,res)=>{
    try{
        const item=await  Item.findOneAndUpdate({_id:req.params.id},{$set:{...req.body}})
res.json({msg:"item added ",item})    
}
catch(err){console.log(err)}})

//****************** */
// @ path:  http://localhost:8000/api/items/deleteItem/:id
//  delete item
// accés public/private
router.delete("/deleteItem/:id",async(req,res)=>{
    try{
        const item=await  Item.findOneAndDelete({_id:req.params.id})
res.json({msg:"item deleted ",item})    
}
catch(err){console.log(err)}})



module.exports = router;