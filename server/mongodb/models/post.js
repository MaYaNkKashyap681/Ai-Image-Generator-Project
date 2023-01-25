const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    prompt: {
        type: String,
        require: true
    },
    photo: {
        type: String,
        require: true
    }
})

const PostModel = mongoose.model("post", postSchema);
module.exports = PostModel;