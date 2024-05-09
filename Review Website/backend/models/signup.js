import mongoose from "mongoose";

const {Schema} = mongoose;

const UserSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,

    },
    password:{
        type:String,
        required:true
    }

})
export default  mongoose.model('signups',UserSchema);