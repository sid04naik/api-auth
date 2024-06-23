import express from "express";
import cors from "cors";
import router from "./routes/routes.mjs"; // Importing the router and healthRoutes from routes

const app = express();

app.use(cors({ origin: true }));
app.use(router);

export default app;
