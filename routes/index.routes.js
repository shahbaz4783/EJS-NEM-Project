import express from 'express'
import { getIndexPage } from '../controllers/index.controller.js'

const router = express.Router()

router.get('/', getIndexPage)

export default router