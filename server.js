require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const apiRouter = require("./routes/api");
const userapi = require("./routes/user");

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("connected to database"));

app.use(express.json());

app.use("/api", apiRouter);
app.use("/api/user",userapi);

app.listen(3000, () => console.log("server sarted"));