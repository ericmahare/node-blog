const express = require("express");
const router = express.Router();
const {
  homePage,
  aboutPage,
  contactPage,
  postPage,
  createPage,
  saveBlogs,
  unknownPage,
  getSinglePost
} = require("../controllers/blog");
// Home page
router.get("/", homePage);

// About page
router.get("/about", aboutPage);

// contact page
router.get("/contact", contactPage);

// post route
router.get("/post", postPage);

// create new post route
router.get("/posts/new", createPage);

// handle blog post request
router.post("/posts/store", saveBlogs);
// handle get single post
router.get('/posts/:id', getSinglePost)
// 404 page
router.get("*", unknownPage);

module.exports = router;
