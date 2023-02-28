const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        tyoe: String,
        required: true
    },
    roles: {
        User: {
            type: String,
            default: 2001
        },
        Editor: Number,
        Admin: Number
    },
    password: {
        tyoe: String,
        required: true
    },
    refreshToken: String
});

module.exports = mongoose.model('User', userSchema)