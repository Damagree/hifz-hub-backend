// ziyadah.routes.js

import express from 'express'
import { upsertProgress } from './ziyadah.controller.js'
import { authenticate } from '../../../middlewares/auth.middleware.js'
import { validateZiyadah } from '../../../middlewares/ziyadah.middleware.js'
const router = express.Router()

router.post('/progress', authenticate, validateZiyadah, upsertProgress)

export default router