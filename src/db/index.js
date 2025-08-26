import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";

const connectdb= async ()=>{
    try{
        const connectionInstantce = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MONGODB IS CONNECTED !! DB_HOST: ${connectionInstantce.connection.host}`)
    }
    catch(error){
            console.log("DATABASE FAILED",error)
            process.exit(1)
    }
}

export default connectdb