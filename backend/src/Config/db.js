import mongoose from "mongoose";

const ConnectMongo = async()=>{
try {
     mongoose.connect(process.env.MONGO_URL)  
    await mongoose.connection.on("connected", ()=>{
        console.log("mongoDb Connected")
    })
} catch (error) {
    mongoose.connection.on("error", (err)=>{
        console.log(err)
    })
}
}
export default ConnectMongo;