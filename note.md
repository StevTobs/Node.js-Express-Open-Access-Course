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

- Access the global object : `console.log(global)`.
- Check out an easier-to-read list of the properties on the global object : `Object.keys(global)`.
- Exit: <ctrl + D>
The global object has a lot of useful properties and methods, and it’s not common to add any to it.