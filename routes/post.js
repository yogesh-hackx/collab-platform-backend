const express = require("express");
const Post = require("../models/Post");
const router = express.Router();


router.get('/', async (req,res)=>{
    const all_post = await Post.find();
    res.json(all_post);
});


router.post('/',async (req,res)=>{
    const new_post = await new Post({
        title:req.body.title,
        content:req.body.content,
        author:req.body.author,
        tags:req.body.tags,
        rating:req.body.rating
    }).save();
    res.json(new_post);
});

router.get('/:id',async (req,res)=>{
    
    await Post.findById({_id:req.params.id})
        .then(post => {
            if(!post){ return res.status(404).end()}
            return res.json(post)
        })
        .catch(err=>next(err))     
                                            
});

module.exports = router