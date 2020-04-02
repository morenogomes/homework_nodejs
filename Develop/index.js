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
      }

];


function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
} 


// function init() {
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {

  console.log("loading");

  api
  .getUser(inquirerResponses.gitHub)
  .then(({ data }) => {
  writeToFile("README.md", generateMarkdown({ ...inquirerResponses, ...data }));

})
})
}

init();