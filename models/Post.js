// models/Post.js
const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let postSchema = new Schema(
  {
    username
: {
      type: String,
    },
    email: {
      type: String,
    },
    
password: {
      type: String,
    },
  },
  { timestamps: true }
);

let Post = mongoose.model("post", postSchema);

module.exports = Post;