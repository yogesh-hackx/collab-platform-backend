const express = require('express');
const User = require('../models/User');
const router = express.Router();
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
    const users = await User.find();
    res.json(users);
});


router.get('/:id',async (req,res)=>{
    await User.findById({ _id: req.params.id })
        .then((user) => {
            if (!user) {
                return res.status(404).end();
            }
            return res.json(user);
        })
        .catch((err) => console.log(err));
});

module.exports = router;
