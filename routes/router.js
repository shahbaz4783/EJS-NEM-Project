import express from 'express';
const routes = express();

import adminRoutes from './admin.routes.js';
import indexRoutes from './index.routes.js';
import authRoutes from './auth.routes.js';
import supportRoutes from './support.routes.js';
import marketplaceRoutes from './marketplace.routes.js';

routes.use('/admin', adminRoutes);
routes.use(indexRoutes, supportRoutes, marketplaceRoutes, authRoutes);

export default routes;
