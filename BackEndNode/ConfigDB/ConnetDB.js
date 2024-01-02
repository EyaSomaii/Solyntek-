const mongoose = require ("mongoose")
const connectDb=async()=>{
    try { 
        await mongoose.connect("mongodb+srv://eyasomai:aEOc9vu9k9P1RjfM@solyntek.jgsjthd.mongodb.net/")
        console.log("db is connected")
        
    } catch (error) {
        console.log("db is not connected")
    }
}
module.exports=connectDb