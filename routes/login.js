const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');


router.post('/', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username }).select('+password');


    await bcrypt.compare(password,user.password)
        .then(exists =>{
            if(exists){
                const token = jwt.sign(
                    {
                        id:user._id
                    },
                        process.env.JWT_SECRET,
                    {
                        expiresIn:'7d'
                    },
                );
                return res.json(token);
                }
            else{
                res.status(404).json({message:"Auth failed!!"})
            }
        })


});    

module.exports = router;