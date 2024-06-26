# Node.js Cheat Sheet

This cheat sheet provides a quick reference for common Node.js commands, operations, and package management.

## Installation

### Install Node.js

Download and install Node.js from the official website: [Node.js](https://nodejs.org/)

## Getting Started

### To see the version
```bash
node -v
```
### To run the node 
```
node <file.js>
```
### To verify the Node package manager (npm) has been installed.
```bash
npm -v
```

### Access the REPL by typing the command node
(REPL : read–eval–print loop)
```bash
node 
```
A REPL can be extremely useful for performing calculations, learning a language, and developing code. 

### In the REPL console:
Node has a global process object with useful methods and information about the current process.
- Access the global object : `console.log(global)`.
- The `process.env` property is an object which stores and controls information about the environment in which the process is currently running. 
- `process.memoryUsage()` returns information on the CPU demands of the current process.
- Check out an easier-to-read list of the properties on the global object : `Object.keys(global)`.
- Exit: <ctrl + D>
The global object has a lot of useful properties and methods, and it’s not common to add any to it.

### Regarding Node.js:
- Require in the 'events' core module: `const events = require('events');`
- In the REPL, a complete list of core modules can be accessed by typing the command: `require('module').builtinModules`
- `console.log()` — to print messages to the terminal.
- `console.assert()` — to print a message to the terminal if the value is falsy.
- `console.table()` — to print out a table in the terminal from an object or array.

### With the `os` module saved to the os variable, you can call methods like:

- `os.type()` — to return the computer’s operating system.
- `os.arch()` — to return the operating system CPU architecture.
- `os.networkInterfaces()` — to return information about the network interfaces of the computer, such as IP and MAC address.
- `os.homedir()` — to return the current user’s home directory.
- `os.hostname()` — to return the hostname of the operating system.
- `os.uptime()` — to return the system uptime, in seconds.

### The Node.js `util` core module contains methods specifically designed for these purposes. 
- `types`, which provides methods for runtime type checking in Node./
For example
```javascript
const util = require('util');

const today = new Date();
const earthDay = 'April 22, 2022';

console.log(util.types.isDate(today));
console.log(util.types.isDate(earthDay));
```
- Another important `util` method is `.promisify()`, which turns callback functions into promises. 

### Callback Functions 

In JavaScript, a callback function is a function that is passed into another function as an argument. This function can then be invoked during the execution of that higher order function (that it is an argument of).
Since, in JavaScript, functions are objects, functions can be passed as arguments.



## Some important JavaScript concepts 
### Arrow Expressions
Arrow expressions has allowed developers to omit parts of the function they don’t need. When using an arrow expression, we do not use the `function` declaration. To define an arrow expression you simply use: `() => { }`. You can pass arguments to an arrow expression between the parenthesis (`()`).
```javascript
// Defining an anonymous arrow expression that simply logs a string to the console.
console.log(() => console.log('Shhh, Im anonymous'));

// Defining a named function by creating an arrow expression and saving it to a const variable helloWorld. 
const helloWorld = (name) => {
  console.log(`Welcome ${name} to Codecademy, this is an arrow expression.`)
};

// Calling the helloWorld() function.
helloWorld('Codey'); //Output: Welcome Codey to Codecademy, this is an Arrow Function Expression.

```
### Asynchronous Concepts
When it comes to development in Node.js and JavaScript, we use a mix of synchronous code (blocking I/O), and asynchronous code (non-blocking I/O). A common example of asynchronous code are Promises.

#### Promises
A Promise is a JavaScript object that represents the eventual outcome of an asynchronous operation. A Promise has three different outcomes: 
- `pending`(the result is undefined and the expression is waiting for a result)
- `fulfilled` (the promise has been completed successfully and returned a value)
- `rejected` (the promise did not successfully complete, the result is an error object)

Examples for demonsetating the important of the promises of JS.


- Without using the Promises concept
```javascript
function getUser (id, callback) {
  return setTimeout(() => {
    if (id === 5) {
      callback(null, { nickname: 'Teddy' })
    } else {
      callback(new Error('User not found'))
    }
  }, 1000)
}

function callback (error, user) {
  if (error) {
    console.error(error.message)
    process.exit(1)
  }

  console.log(`User found! Their nickname is: ${user.nickname}`)
}

getUser(1, callback) // -> `User not found`
getUser(5, callback) // -> `User found! Their nickname is: Teddy`
```
- With using the Promises concept
```javascript
const getUserPromise = util.promisify(getUser);

getUserPromise(id)
  .then((user) => {
      console.log(`User found! Their nickname is: ${user.nickname}`);
  })
  .catch((error) => {
      console.log('User not found', error);
  });

getUser(1) // -> `User not found`
getUser(5) // -> `User found! Their nickname is: Teddy`

```

- Another
```javascript
// Require in trails module from trails.js
const trails = require('./trails.js');
// Require in util module here
const util = require('util');

// Simulate database call to search trails module for specified trail
const getTrailDistance = (trail, callback) => {
  return setTimeout(() => {
    if (trails.hasOwnProperty(trail)) {    
      const foundTrail = trails[trail];    
      callback(null, foundTrail)
    } else {
      callback(new Error('Trail not found!'))
    }
  }, 1000);
}

// Callback function to send an error in the case of an error, or to handle trail data if a trail was found successfully.
function callback (error, trailData) {
  if (error) {
    console.error(error.message)
    process.exit(1)
  } else {
    const mi = trailData.miles;   
    const nickname = trailData.nickname;
    console.log(`The ${nickname} is ${mi} miles long!`)
  }
}

getTrailDistance('North Country', callback)

// Promisfy below!
const getTrailDistancePromise = util.promisify(getTrailDistance);

getTrailDistancePromise('North Country')
  .then((trailData) => {
 
    const mi = trailData.miles;   
    const nickname = trailData.nickname;
    console.log(`The ${nickname} is ${mi} miles long!`)
  } )
  .catch((error) => {
    console.error(error.message);
    process.exit(1)
    })



```