import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{ 
        type: String,
        required: true,
        unique: true //one user of one username
    },
    email:{ 
        type: String,
        required: true,
        unique: true //one user of one email
    },
    password:{ 
        type: String,
        required: true
    },
    isAdmin:{ 
        type: Boolean,
        default: false
    }
},{timestamps: true})

export default mongoose.model("User",UserSchema) 