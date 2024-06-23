import express from "express";
import authRoute from "./auth.route.js";
import healthRoute from "./health.route.js";
import docsRoute from "./docs.route.js";
import { config } from "#config";

const router = express.Router();

const defaultRoutes = [
	{
		path: "/v1/",
		route: authRoute,
	},
	{
		path: "/v1/health",
		route: healthRoute,
	},
];

const devRoutes = [
	// routes available only in development mode
	{
		path: "/v1/docs",
		route: docsRoute,
	},
];

defaultRoutes.forEach((route) => {
	router.use(route.path, route.route);
});

if (config.env === "local") {
	devRoutes.forEach((route) => {
		router.use(route.path, route.route);
	});
}

export default router;
