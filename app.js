import 'dotenv/config';
import express from 'express';
import indexRoutes from './routes/index.routes.js';
import supportRoutes from './routes/support.routes.js';

const app = express();

app.use(indexRoutes);
app.use(supportRoutes);

app.listen(process.env.PORT, () => {
	console.log(`Listening in Port ${process.env.PORT}`);
});
