
import  mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const mongoURI = process.env.MONGO_URI;


// const mongoURI = 'mongodb+srv://<username>:<password>@cluster0.dlwp2a9.mongodb.net/<databse>?retryWrites=true&w=majority&appName=Cluster0'

const mongoDB = async()=>{
    
   await mongoose.connect(mongoURI)
    .then(async ()=>{
        console.log("mongodb connected");

        
    })
    .catch(()=>{
        console.log('failed');
    })
}


export default mongoDB
