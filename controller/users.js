const users=require("../model/users")
const createuser=async(req,res)=>{
    try {
        const found=await users.findOne({email:req.body.email})
        console.log(found)
        if(found){
            res.status(400).send({msg:"user already exist"})
        }
        else{
            const user=new users(req.body)
            await user.save()
        
            res.status(200).send({msg:"user added successfully",user})
        }
       
    } catch (error) {
        res.status(500).send({msg:"user is not created",error})

    }
}
const deleteuser=async(req,res)=>{
    try {
        const id=req.params.id
        console.log(id)
        const user=await users.findByIdAndDelete(id)
        res.status(200).send({msg:"user has been delete"})
    } catch (error) {
        res.status(500).send({msg:"user not delete"})
    }
}
const getusers=async(req,res)=>{
    try {
        const allusers=await users.find()
        res.status(200).send({msg:"this is the list of users",allusers})
    } catch (error) {
        res.status(500).send({msg:"list not found"})
    }
}
const updateuser=async(req,res)=>{
try {
    const id=req.params.id
    const user=await users.findByIdAndUpdate(id,{$set:req.body},{new:true})
    res.status(200).send({msg:"user apdated",user})
} catch (error) {
    res.status(500).send({msg:"user not apdated"})
}
}
const getoneusers=async(req,res)=>{
    try {
        const id=req.params.id
        const oneuser=await users.findOne({_id:id})
        res.status(200).send({msg:"user is found",oneuser})
    } catch (error) {
        res.status(500).send({msg:"user not found"})
    }
}
module.exports={createuser,deleteuser,getusers,updateuser,getoneusers}