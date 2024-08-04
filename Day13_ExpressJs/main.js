require("dotenv").config();
require("./config/db.js");
const express = require("express");
const recipeRouter = require("./routes/recipeRoutes");
const fsPromises = require("fs/promises");
const morgan = require("morgan");

const app = express();
app.use(express.json());

app.use(morgan("dev"));

app.use((req, res, next) => {
    fsPromises.appendFile("my-server-logs.txt", `${new Date()} --> ${req.method} --> ${req.url}\n`);
    next();
});

app.get("/", (req, res) => {
    res.send("App is running...");
});

app.use("/recipes", recipeRouter);

app.listen(1900, () => {
    console.log("----------- App started --------------");
});
