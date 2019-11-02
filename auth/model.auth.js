const mongoose = require('mongoose');
const Scheme = mongoose.Schema;


const userSchema = new Scheme({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
},{
    timestamps: true
});

module.exports = userSchema;