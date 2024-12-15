const express=require("express")
const {createuser,deleteuser,getusers, updateuser, getoneusers,} = require("../controller/users")
const userrouter=express.Router()
userrouter.post("/add",createuser) 
userrouter.delete("/delete/:id",deleteuser)
userrouter.get("/get",getusers)
userrouter.put("/update/:id",updateuser)
userrouter.get("/getone/:id",getoneusers)
module.exports=userrouter