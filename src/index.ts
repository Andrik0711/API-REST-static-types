import express from "express"; // ESModules
// const express = require("express"); // CommonJS
import diaryRouter from "./routes/diaries"; // Importing the diaries router

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

const PORT = 3000;

app.get("/", (_, res) => {
	console.log("Hello World!");
	res.send("Hello World!");
});

app.get("/ping", (_, res) => {
	console.log("Ping!");
	res.send("Ping!");
});

app.use("/api/diaries", diaryRouter); // Mounting the diaries router on the /api/diaries path

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

app.get("/api", (_, res) => {
	res.json({ message: "Hello from the API!" });
});
