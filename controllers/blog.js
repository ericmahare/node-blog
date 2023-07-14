const path = require('path')
const Blog = require('../models/blog')
// home page
exports.homePage = async (req, res) => {
  try {
    const blogs = await Blog.find({})
    res.status(200).render('index', {
      blogs
    })
  } catch(err) {
    console.log(err)
  }
}

// about page
exports.aboutPage =   (req, res) => {
  res.status(200).render('about')
}

// contact page
exports.contactPage = (req, res) => {
  res.status(200).render('contact')
}

// post page
exports.postPage = (req, res) => {
  res.status(200).render('post')
}

// create page
exports.createPage = (req, res) => {
  res.status(200).render('create')
}

// save blogs
exports.saveBlogs =  async (req, res) => {
  try {
    let image = req.files.image;
    await image.mv(path.resolve(__dirname,'../public/assets/img/blogs',image.name))
    await Blog.create({...req.body, image: image.name})
    res.status(201).redirect('/')
  }catch(err) {
    console.log(err)
    res.status(400).redirect('/')
  }
}

exports.getSinglePost = async (req, res) => {
  // res.status(200).render()
  try {
    const blog = await Blog.findById(req.params.id)
  res.status(200).render('post', {
      blog
    })

  } catch (err) {

  }
}

// unknown page
exports.unknownPage = (req, res) => {
  res.status(404).render('404')
}
