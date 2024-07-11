const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: true,
        enum: ['admin', 'client']
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;