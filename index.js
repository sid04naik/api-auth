import app from "#expressApp";
import { https } from "#config";

const PORT = 9001;
app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`);
});

export const auth = https.onRequest(app);
