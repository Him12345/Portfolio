import mongoose from "mongoose";

export const connectDatabase=()=>{
    mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true }).then((e)=>{
       console.log(`Mongodb connect to: ${e.connection.host}`);
    }).catch(e=>console.log(e));


}