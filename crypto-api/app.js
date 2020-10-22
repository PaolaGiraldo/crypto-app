const express = require('express');
const path = require("path");
const bodyParser = require("body-parser");
const boom = require("boom");


const coinsRouter = require(path.join(__dirname, 'routes/api/coins'));
const priceRouter = require(path.join(__dirname, 'routes/api/price'));
const createUserRouter = require(path.join(__dirname, 'routes/api/createuser'));
const authRouter = require(path.join(__dirname, 'routes/api/auth'));
const userInfoRouter = require(path.join(__dirname, 'routes/api/userinfo'));
const apiDocsRouter = require(path.join(__dirname, 'routes/api/api-docs'));

const {
  logErrors,
  clientErrorHandler,
  errorHandler
} = require("./utils/middlewares/errorsHandlers");



const app = express()

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use("/coins", coinsRouter);
app.use("/price", priceRouter);
app.use("/createuser", createUserRouter);
app.use("/auth", authRouter);
app.use("/userinfo", userInfoRouter);
app.use("/userinfo", userInfoRouter);
app.use("/docs", apiDocsRouter);

//redirect
app.get('/', function (req, res) {
  res.redirect('/coins');
});

app.use(function (req, res, next) {
  const {
    output: { statusCode, payload } } = boom.notFound();
  res.status(statusCode).json(payload);
})

// error handlers
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

module.exports = app;

