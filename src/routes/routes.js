import express from 'express';
import { logger } from '../config/firebaseConfig.js'; // Importing logger from config

const router = express.Router();

router.get('/health', (request, response) => {
	logger.info('Health Check');
	return response.jsonp({ status: 'ok', ts: Date.now() }).status(200);
});

router.get('/', (request, response) => {
	logger.info('GET');
	return response.send('Hello').status(200);
});

export default router;
