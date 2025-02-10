const express = require('express');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const authRoute = express.Router();

//signUp
// authRoute.post('/signUp', async (req, res) => {
//     const { name, email, password } = req.body;
//     try {
//         if (!name || !email || !password) {
//             return res.status(409).json({ isSuccessfully: false, message: 'Validation error' })
//         }
//         const existingUser = await User.findOne({ email })
//         if (existingUser) {
//             return res.status(412).json({ isSuccessfully: false, message: 'Email are already exists' })
//         }
//         const isHashedPassword = await bcrypt.hash(password, 10);
//         const newUser = new User({
//             name,
//             email,
//             password: isHashedPassword
//         })

//         await newUser.save();
//         res.status(200).json({ isSuccessfully: true, message: 'User has successfully created', data: newUser })

//     } catch (error) {
//         console.log(error)
//         res.status(500).json({ isSuccessfully: false, message: 'Internal server error' })
//     }
// })


//signUp with id
authRoute.post('/signUp', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        if (!name || !email || !password) {
            return res.status(409).json({ isSuccessfully: false, message: 'Validation error' });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(412).json({ isSuccessfully: false, message: 'Email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();

        res.status(200).json({
            isSuccessfully: true,
            message: 'User has successfully created',
            data: {
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email
            }
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ isSuccessfully: false, message: 'Internal server error' });
    }
});

//profile
authRoute.get('/profile/:userId', async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id).select("-password");
        if (!user) {
            return res.status(404).json({ isSuccessfully: false, message: 'User not found' });
        }
        res.json({ isSuccessfully: true, data: user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ isSuccessfully: false, message: 'Internal server error' });
    }
});

//Login
authRoute.post('/Login', async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(409).json({ isSuccessfully: false, message: 'Validation error' })
        }
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(410).json({ isSuccessfully: false, message: 'Email not Found' })
        }
        const isMatchedPassword = await bcrypt.compare(password, existingUser.password)
        if (!isMatchedPassword) {
            return res.status(406).json({ isSuccessfully: false, message: 'inValid Password' })
        } else {
            res.status(200).json({ isSuccessfully: true, message: 'User is Successfully Logged In' })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ isSuccessfully: false, message: 'Internal server error' })
    }
})

module.exports = authRoute;