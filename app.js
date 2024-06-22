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
