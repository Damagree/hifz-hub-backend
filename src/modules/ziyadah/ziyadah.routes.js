// ziyadah.routes.js

import express from 'express'
import { addProgress } from './ziyadah.controller.js'
import { authenticate } from '../../../middlewares/auth.middleware.js'
const router = express.Router()

router.post('/add-progress', authenticate, addProgress)

export default router