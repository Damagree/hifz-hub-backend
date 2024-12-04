// murojaah.routes.js

import { Router } from 'express'
import { addMurojaah } from './murojaah.controller.js'
import { authenticate } from '../../../middlewares/auth.middleware.js'
const router = Router()

router.post("/add", authenticate, addMurojaah)

export default router