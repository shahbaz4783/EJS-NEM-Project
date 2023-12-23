import 'dotenv/config';
import express from 'express';
import session from 'express-session';
import connectMongoDBSession from 'connect-mongodb-session';
import routes from './routes/router.js';
import { error } from './controllers/error.controller.js';
import { connectDB } from './config/db.js';
import User from './models/User.js';

const MongoDBStore = connectMongoDBSession(session);

const app = express();

const store = new MongoDBStore({
	uri: process.env.MONGO_URI,
	collection: 'sessions',
});

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(
	session({
		secret: 'This is a Secret',
		resave: false,
		saveUninitialized: false,
		store: store,
	})
);


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
