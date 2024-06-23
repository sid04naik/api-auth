import express from "express";
import { logger } from "../config/firebase.config.mjs"; // Importing logger from config
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import { fileURLToPath } from "url";
import path from "path";
// Get the file path of the current module
const __filename = fileURLToPath(import.meta.url);
// Get the directory name of the current module
const __dirname = path.dirname(__filename);
const swaggerDocument = YAML.load(path.join(__dirname, "../../swagger/auth.yaml"));
const router = express.Router();

router.get("/health", (request, response) => {
	logger.info("Health Check");
	return response.jsonp({ status: "ok", ts: Date.now() }).status(200);
});

router.get("/", (request, response) => {
	logger.info("GET");
	return response.send("Hello").status(200);
});

// Serve the Swagger UI using the specified route
router.use("/docs", swaggerUi.serve);
router.get("/docs", swaggerUi.setup(swaggerDocument));

export default router;
