import app from "./src/app.mjs";
import { https } from "./src/config/index.mjs";

const PORT = 9001;
app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`);
});

export const auth = https.onRequest(app);
