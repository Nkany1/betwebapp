import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    surname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    password: {
        type:  String,
        required: true,
        minlength: 8,
        trim: true
    }
}, {
    timestamps: true
});

mongoose.models = {};

export default mongoose.model('User', UserSchema);