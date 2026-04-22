import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required:[true, "Usename is required"],
        unique: true
    },
    email:{
        type: String,
        required: [true, "email is required"],
        unique: true
    },
    password:{
        type:String,
        required: [true, "Password is reuired"],
        unique: true,
    }

})

const userModel= mongoose.model("users", userSchema)

export default userModel;