const mongoose=require("mongoose")
const config=async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/test")
        console.log("database is connected")
    } catch (error) {
        console.log("database is not connected")
    }
}
module.exports=config 