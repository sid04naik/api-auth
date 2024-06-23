import express from "express";
import cors from "cors";
import router from "./routes/v1/index.js";

const app = express();

app.use(cors({ origin: true }));
app.use(router);

export default app;
