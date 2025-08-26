import mongoose from "mongoose";

import { DB_name } from "../../constants.js";

const connectdb =async () =>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`)
        console.log(`\n MONGODB CONNECTED !! DB_HOST: ${connectionInstance.connection.host}`)
    }
    catch(error){
        console.log("DATABASE ERROR",error)
        process.exit(1)
    }
}

export default connectdb;