const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    username: String,
    password:String,
    avatar: String,
    skills: [ String ],
    description:String,
    socialhandles: [ String ],
    posts: {
        created:[mongoose.ObjectId],
        joined:[{id:mongoose.ObjectId,status:String}]
    }
});

const User = mongoose.model('user', UserSchema);

module.exports = User

