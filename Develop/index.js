const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");

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
        message: "How would you use the repo?"
      },
       {
        type: "input",
        name: "test",
        message: "How would you run a test?",
        default: "npm test"
      },
       {
        type: "input",
        name: "installation",
        message: "How do you install depandences for this project?",
        default: "npm install"
      },
      {
        type: "input",
        name: "description",
        message: "Please describe this repo?"
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
