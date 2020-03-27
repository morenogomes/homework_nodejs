const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const api = require("/utils/api");
const generateMarkdown = require("utils/generateMarkdown");


const questions = [ 
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
      },
       {
        type: "input",
        name: "title",
        message: "What is your project's name?"
      } 
];


// function writeToFile(fileName, data) {
//     return fs.
// }

// function init() {

// }

// init();
