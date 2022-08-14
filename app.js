const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const authRouter = require("./app/api/auth/router");
const categoriesRouter = require("./app/api/categories/router");
const URL = `/api/v1`;

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => {
  console.log("[SERVER] Server started on port 3000");
});

app.get("/", (req, res) => {
  res.json({ message: "Success to fetch the Book Store API!!" });
});
app.use(`${URL}`, authRouter);
app.use(`${URL}`, categoriesRouter);

module.exports = app;
