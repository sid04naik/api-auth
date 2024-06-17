// import functions from 'firebase-functions';
// const { https, logger } = functions;
// import express from 'express';
// import cors from 'cors';

// const app = express();
// app.use(cors({ origin: true }));

// app.get('/', (request, response) => {
// 	return response.send('Hi there what is up').status(200);
// });

// const PORT = 9001;
// app.listen(PORT, () => {
// 	logger.info(`Server is running on ${PORT}`);
// });


import app from './src/config/expressConfig.js'; // Importing the Express app from expressConfig
import { https } from './src/config/firebaseConfig.js'; // Importing the Express app from expressConfig
import router from './src/routes/routes.js'; // Importing the router and healthRoutes from routes

const PORT = 9001;

// Mounting the main router to the Express app
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});


export const auth = https.onRequest(app);
