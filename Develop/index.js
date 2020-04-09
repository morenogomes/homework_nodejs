const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: "gitHub",
    message: "What is your gitHub username?"
  },
  {
    type: "input",
    name: "title",
    message: "What is your project's name?"
  },
  {
    type: "input",
    name: "description",
    message: "Describe your app?"
  },
  {
    type: "list",
    name: "license",
    message: "What's your license?",
    choices: ['None', 'MIT', 'apache-2.0', 'wtfpl']
  },
  {
    type: "input",
    name: "contributing",
    message: "Who else contributed?"
  },
  {
    type: "input",
    name: "usage",
    message: "How would you use this app?"
  },
  {
    type: "input",
    name: "installation",
    message: "Is there installation required before usage?",
    default: "npm install"
  },
  {
    type: "input",
    name: "test",
    message: "How would you test the app?",
    default: "node index.js inside the terminal."
  }
];


function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}


// function init() {
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    api
      .getUser(inquirerResponses.gitHub)
      .then(({ data }) => {
        writeToFile("README.md", generateMarkdown({ ...inquirerResponses, ...data }));

      })
  })
}

init();
