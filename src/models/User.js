import mongoose from 'mongoose'
import bcryptjs from 'bcryptjs'

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        trim: true
    },
    email: {
        type: String,
        required: true, 
        unique: true, 
        lowercase: true,
        index: {unique: true}
    },
    password: {
        type: String,
        required: true, 
    },

    roles:  [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Role",
        },
      ],
},
    {
        timestamps: true,
        versionKey: false,
    }
);


//Metodos y validaciones del user



export const User = mongoose.model('User', userSchema)