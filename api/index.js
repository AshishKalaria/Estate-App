import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
const app = express();
const port = 4000;

app.use(express.json());
app.use((err, req, res, next) => {
	const statusCode = err.statusCode || 500;
	const message = err.message || "Internal server error";
	return res.status(statusCode).json({
		success: false,
		statusCode,
		message,
	});
});
app.use("/api/v1/user", userRouter);
app.use("/api/v1/auth", authRouter);

app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./client", "index.html"));
});

app.use("*", (req, res) => {
	res.status(404).json({ msg: "not found" });
});

try {
	await mongoose.connect(process.env.MONGO_URI);
	app.listen(port, () => {
		console.log(`server running on PORT ${port}....`);
	});
} catch (error) {
	console.log(error);
	process.exit(1);
}
