const express = require('express');


const chalk = require('chalk');
// npm install chalk@4.0.0

const debug = require('debug')('app');
// npm install debug
// for run (MAC): DEBUG=* node app.js
// for run (Windows):set DEBUG=* & node app.js
 
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT;

app.use(morgan('combined'))

app.use(express.static(path.join(__dirname,"/public/")))

// app.get("/", (req,res) => {
//     res.send('The engine is powered by Node.js.\nCreated by Akanit Kwangkaew');
// })
app.get('/', (req, res) => {
    // Including newline characters in the response
    const responseText = 'Hello, this is powered by Node.js.<br>Created by Akanit.';
    res.send(responseText);
  });
  
  
app.listen(PORT, ()=>{
    debug("Listening on PORT : " + chalk.green(PORT));
})

// To run app : node app.js   