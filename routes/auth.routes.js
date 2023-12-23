import express from 'express';
import {
	getLoginForm,
	getRegisterForm,
	postLogin,
	postNewUser,
} from '../controllers/auth.controller.js';

const router = express.Router();

router.get('/login', getLoginForm);
router.get('/register', getRegisterForm);

router.post('/login', postLogin);
router.post('/register', postNewUser);

export default router;
