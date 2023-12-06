import express from 'express'
import { getSupportPage } from '../controllers/support.controller.js'

const router = express.Router()

router.get('/support', getSupportPage)

export default router