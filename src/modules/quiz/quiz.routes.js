// quiz.routes.js

import express from 'express'
import { authenticate } from '../../../middlewares/auth.middleware.js'
import { getRandomQuiz } from './quiz.controller.js'

const router = express.Router()
router.get('/random', authenticate, getRandomQuiz)

export default router