import express from 'express';
import {
	getLoginForm,
	getRegisterForm,
	postNewUser,
} from '../controllers/auth.controller.js';

const router = express.Router();

router.get('/login', getLoginForm);
router.get('/register', getRegisterForm);

router.post('/register', postNewUser);

export default router;
