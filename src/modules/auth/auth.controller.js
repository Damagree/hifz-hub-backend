// auth.controller.js

import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from './user.model.js'

export const register = async (req, res) => {
    const { username, password } = req.body

    try {
        const userExist = await User.findOne({ username })

        if (userExist)
            return res.status(400).json({ msg: "User already exists" })

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({ username, password: hashedPassword })
        await newUser.save()

        const token = jwt.sign(
            { userId: newUser._id },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        )

        res.status(201).json({
            msg: 'Successfully registered',
            token
        })

    } catch (error) {
        res.status(500).json({
            msg: "Server Error"
        })
    }
}

export const login = async (req, res) => {
    const { username, password } = req.body

    try {
        const user = await User.findOne({ username })

        if (!user) {
            return res.status(400).json({
                msg: "Invalid credentials"
            })
        }

        // Check if password matches
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch){
            return res.status(400).json({
                msg: "Invalid credentials"
            })
        }

        // Generate JWT Token
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        )

        res.status(200).json({
            msg: "Login Success",
            token
        })

    } catch (error) {
        res.status(500).json({
            msg: "Server error"
        })
    }
}