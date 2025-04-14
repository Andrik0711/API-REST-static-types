"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // Middleware to parse JSON bodies
const PORT = 3000;
app.get("/", (_, res) => {
    console.log("Hello World!");
    res.send("Hello World!");
});
app.get("ping", (_, res) => {
    console.log("Hello World!");
    res.send("Hello World!");
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
app.get("/api", (_, res) => {
    res.json({ message: "Hello from the API!" });
});
