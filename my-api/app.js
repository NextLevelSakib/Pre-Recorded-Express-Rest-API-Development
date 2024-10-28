const express = require('express');
const router = require("./src/routes/api.js")
const app = express();



//Security Middlewares Import
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require('xss-clean')
const hpp = require('hpp');
const cors = require('cors');




//Security Middlewares Implement
app.use(cors())
app.use(mongoSanitize)
app.use(hpp())
app.use(helmet())
app.use(xss())



//Rate Limit
const limiter = rateLimit({

    windowMs: 15 * 60 * 1000, //15 Minute's
    max: 300}) //Limit Each IP to 100 Requests per WindowMs


app.use(limiter)




//Set Api Route's
app.use('/api', router)




//Undefined Api
app.use('*', (req, res) => {
    res.status(404).send('Not Found');
    res.end()
})



//Export's
module.exports = app;

