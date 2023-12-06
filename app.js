import 'dotenv/config';
import express from 'express';
import indexRoutes from './routes/index.routes.js';
import supportRoutes from './routes/support.routes.js';
import { connectDB } from './config/db.js';

connectDB();

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(indexRoutes);
app.use(supportRoutes);

app.listen(process.env.PORT, () => {
	console.log(`Listening in Port ${process.env.PORT}`);
});
