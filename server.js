// server.js

import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';

dotenv.config()

const app = express()
app.use(express.json()); // Middleware to parse JSON bodies
connectDB()

import authRoutes from './src/modules/auth/auth.routes.js';
app.use('/api/auth', authRoutes)

import murojaahRoutes from './src/modules/murojaah/murojaah.routes.js';
app.use('/api/murojaah', murojaahRoutes)

import ziyadahRoutes from './src/modules/ziyadah/ziyadah.routes.js'
app.use('/api/ziyadah', ziyadahRoutes)

app.listen(process.env.LISTEN_PORT, () => console.log(`Server running on port: ${process.env.LISTEN_PORT}`))