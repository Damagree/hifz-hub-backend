// auth.middleware.js

import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const authenticate = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', ''); // Extract the token

    if (!token)
        return res.status(401).json({ msg: 'No token, authorization denied'})

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded.userId
        next()
    } catch (error) {
        res.status(401).json({
            msg: 'Invalid token',
            error
        })
    }
}