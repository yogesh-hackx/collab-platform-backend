const express = require("express");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
    const users = await User.find();
    res.json(users);
});

router.post("/", async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    // checking if user already exists with given username
    if (user)
        return res
            .status(422)
            .send(`User already exists with username ${username}`);

    // if new user, hashing pass, and creating user
    const hash = await bcrypt.hash(password, 10);
    const newuser = await new User({
        username,
        password: hash,
    }).save();
    res.json(newuser);
    console.log(newuser);
});

module.exports = router;
