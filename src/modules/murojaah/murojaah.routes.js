// murojaah.routes.js

import { Router } from 'express'
import { addMurojaah } from './murojaah.controller.js'
const router = Router()

router.post("/add", addMurojaah)

export default router