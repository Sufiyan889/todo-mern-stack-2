import dotenv from "dotenv";
import app from './app.js'
import ConnectMongo from "./Config/db.js";

dotenv.config()

const Port = process.env.PORT

ConnectMongo()

app.listen(Port,()=>{
    console.log("SERVER WORKING")
})

