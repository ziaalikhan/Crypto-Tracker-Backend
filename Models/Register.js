const mongoose = require("mongoose");

const register = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirm_password: {
        type: String,
        required: true
    },
}, { timestamps: true });

const RegisterSchema = mongoose.model("Register", register);

module.exports = RegisterSchema;