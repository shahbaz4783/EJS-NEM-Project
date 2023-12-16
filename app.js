import 'dotenv/config';
import express from 'express';
import routes from './routes/router.js';
import { error } from './controllers/error.controller.js';
import { connectDB } from './config/db.js';
import User from './models/User.js';

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


app.use((req, res, next) => {
    User.findById('6575a0bc68760ac68114641a')
			.then((user) => {
				req.user = user;
				next();
			})
			.catch((err) => console.log(err));
});

app.use(routes);
app.use(error);

connectDB(
	app.listen(process.env.PORT, () => {
		console.log(`Listening in Port ${process.env.PORT}`);
	})
);
