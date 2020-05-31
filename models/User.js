const mongoose = require("mongoose");
const { String } = mongoose.Schema.Types;

const UserSchema = new mongoose.Schema(
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
        avatar: String,
        skills: [String],
        description: String,
        socialhandles: [String],
        posts: {
            created: [mongoose.ObjectId],
            joined: [{ id: mongoose.ObjectId, status: String }],
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("user", UserSchema);

module.exports = User;
