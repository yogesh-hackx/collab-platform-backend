const mongoose = require('mongoose');

const requiredString = {
    type: String,
    required: true,
};

const postSchema = new mongoose.Schema({
    title: requiredString,
    content: {
        idea: requiredString,
        required: [String],
    },
    author: {
        type: mongoose.ObjectId,
        ref: 'User',
    },
    tags: [String],
    rating: {
        type: mongoose.Number,
        default: 0,
    },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
