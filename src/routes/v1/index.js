import express from "express";
import authRoute from "./auth.route.js";
import healthRoute from "./health.route.js";
import docsRoute from "./docs.route.js";
// const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/login',
    route: authRoute,
  },
  {
    path: '/health',
    route: healthRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
// if (config.env === 'development') {
	devRoutes.forEach((route) => {
		router.use(route.path, route.route);
	});
// }

export default router;
