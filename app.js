import 'dotenv/config';
import express from 'express';
import indexRoutes from './routes/index.routes.js';
import supportRoutes from './routes/support.routes.js';
import adminRoutes from './routes/admin.routes.js'
import { error } from './controllers/error.controller.js';
import { connectDB } from './config/db.js';

connectDB();

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(indexRoutes);
app.use(supportRoutes);
app.use('/admin', adminRoutes);
app.use(error);

app.listen(process.env.PORT, () => {
	console.log(`Listening in Port ${process.env.PORT}`);
});
