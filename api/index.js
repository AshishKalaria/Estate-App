import express from "express";
const app = express();
const port = 4000;

app.get("/", (req, res) => {
	res.send("<h1>Welcome to Home Page</h1>");
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}...`);
});
