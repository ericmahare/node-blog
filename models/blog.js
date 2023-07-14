const mongoose = require("mongoose");

// Blog schema
const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  body: {
    type: String,
    required: true,
    trim: true
  },
  username: String,
  datePosted: {
    type: Date,
    default: new Date()
  },
  image: String
});

// blog model
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
