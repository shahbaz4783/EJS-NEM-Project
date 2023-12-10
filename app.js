import 'dotenv/config';
import express from 'express';
import routes from './routes/router.js';
import { error } from './controllers/error.controller.js';
import { connectDB } from './config/db.js';

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(error);

connectDB(
	app.listen(process.env.PORT, () => {
		console.log(`Listening in Port ${process.env.PORT}`);
	})
);
