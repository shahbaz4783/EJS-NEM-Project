import express from 'express';
import {
	getLoginForm,
	getRegisterForm,
	postLogin,
	postLogout,
	postNewUser,
} from '../controllers/auth.controller.js';

import { isAuth, redirectIfLoggedIn } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/login', redirectIfLoggedIn, getLoginForm);
router.get('/register', redirectIfLoggedIn, getRegisterForm);

router.post('/login', redirectIfLoggedIn, postLogin);
router.post('/register', redirectIfLoggedIn, postNewUser);

router.post('/logout', isAuth, postLogout);

export default router;
