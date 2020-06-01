const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.post('/', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    // checking if user already exists with given username
    if (user)
        return res
            .status(422)
            .send(`User already exists with username ${username}`);

    // if new user, hashing pass,and creating user
    const hash = await bcrypt.hash(password, 10);
    const newUser = await new User({
        username,
        password: hash,
    }).save();
    console.log(newUser);

    const token = jwt.sign(
        {
            userId: newUser._id,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '7d',
        },
    );
    res.status(201).json(token);
});

module.exports = router;
