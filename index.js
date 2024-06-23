import app from "#expressApp";
import { https } from "#config";

const PORT = 9001;
app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`);
});

export const docs = https.onRequest(app);
