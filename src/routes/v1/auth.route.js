import express from "express";
import { logger } from "#config"; // Importing logger from config

const router = express.Router();

router.get("/", (request, response) => {
	logger.info("GET");
	return response.send("Hello").status(200);
});

export default router;
