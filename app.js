const express = require('express');
const chalk = require('chalk');
// npm install chalk@4.0.0

const debug = require('debug')('app');
// npm install debug
// for run (MAC): DEBUG=* node app.js
// for run (Windows):set DEBUG=* & node app.js
 
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(morgan('combined'))

app.get("/", (req,res) => {
    res.send('Hello World!');
})

app.listen(port, ()=>{
    // console.log("Listening on port : " + chalk.green(port));
    debug("Listening on port : " + chalk.green(port));
})

