const mongoose = require('mongoose');
const { String } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            select: false,
        },
        avatar: {
            type: String,
            default: '',
        },
        skills: [String],
        description: {
            type: String,
            default: '',
        },
        socialhandles: [String],
        posts: {
            created: [mongoose.ObjectId],
            joined: [{ id: mongoose.ObjectId, status: String }],
        },
    },
    {
        timestamps: true,
    },
);

const User = mongoose.model('User', userSchema);

module.exports = User;
