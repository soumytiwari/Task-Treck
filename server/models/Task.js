import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

// module.exports = mongoose.model('Task', taskSchema)
export const Task = mongoose.model('Task', taskSchema)