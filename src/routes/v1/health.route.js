import express from "express";
import { logger } from "#config"; // Importing logger from config

const router = express.Router();

router.get("/", (request, response) => {
	logger.info("Health Check");
	return response.jsonp({ status: "ok", ts: Date.now() }).status(200);
});

export default router;
