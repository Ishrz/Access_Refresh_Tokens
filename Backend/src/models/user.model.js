import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:String,
    email:{
        type:String,
        required:[true,"Email is required"],
    },
    password:String,
    refreshToken:String
})


const User = mongoose.model("User" , UserSchema)

export default User