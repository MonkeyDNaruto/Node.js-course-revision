const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    firstName: {
        tyoe: String,
        required: true
    },
    lastName: {
        tyoe: String,
        required: true
    }
});

module.exports = mongoose.model('Employee', employeeSchema)