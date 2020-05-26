const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    title:String,
    content:{
        idea:String,
        required: [String]
    },
    author:{
        id:ObjectId,
        name:String,
        avatar:String
    },
    tags:[String],
    rating:Number
});

const Post = mongoose.model('post', PostSchema);

module.exports= Post