import mongoose from "mongoose";
const {Schema} = mongoose;
const UserSchema = new Schema(
    {
        email:{
            type:String,
            required:true,
            unique:true,
            
        },
        title:{
            type:String,
            required:true,
        },
        image:{
            type:String,
            required:true,
        },
        content:{
            type:String,
            required:true,
        },
        date:{
            type:Date,
            default:Date.now,
        }


    }
)
export default mongoose.model('blogs',UserSchema);