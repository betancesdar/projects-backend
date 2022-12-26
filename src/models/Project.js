import mongoose, { mongo } from "mongoose";


const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, 
        trim: true,
        unique: true,
        index: {unique: true}
    },
    description: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    demo: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }

});


export const Project = mongoose.model('Project', projectSchema)
