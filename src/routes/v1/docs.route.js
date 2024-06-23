import express from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import { fileURLToPath } from "url";
import path from "path";

// Get the file path of the current module
const __filename = fileURLToPath(import.meta.url);
// Get the directory name of the current module
const __dirname = path.dirname(__filename);
const swaggerDocument = YAML.load(path.join(__dirname, "../../../swagger/auth.yaml"));
const router = express.Router();

// Serve the Swagger UI using the specified route
router.use("/", swaggerUi.serve);
router.get(
	"/",
	swaggerUi.setup(swaggerDocument, {
		explorer: true,
	}),
);

export default router;
