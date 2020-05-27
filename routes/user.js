const mongoose = require("mongoose")
const express = require('express')
const user = require("../models/User")
const router = express.Router()

router.get('/', async (req, res) => {
   const users = await user.find();
   res.json(users);
  })

router.post('/',async(req,res)=> {
    const newuser = new user({
        username:req.body.username,
        password:req.body.password,
        avatar:req.body.avatar,
        skills: req.body.skills,
        description:req.body.description,
        socialhandles: req.body.socialhandles,
        posts: req.body.posts
    });
    newuser.save()
        .catch(err=>console.log(err))
        .then(console.log("User created"))
    res.json(newuser)
 })  

module.exports = router     
