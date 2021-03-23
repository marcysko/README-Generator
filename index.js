const fs = require('fs');
const inquirer = require('inquirer');
const apiax = require("./utils/api.js")
const generateMarkdown = require("./utils/generateMarkdown.js")


const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "title"
    },
    {
        type: "input",
        message: "Please write a description of your project.",
        name: "description"
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "installation",
    },
    {
        type: "input",
        message: "Provide instructions and examples for using the repository.",
        name: "usage",
    },
    {
        type: "input",
        message: "What guidelines do you want to add for users to contribute?",
        name: "contributing"
    },
    {
        type: "input",
        message: "Provide instructions for running tests.",
        name: "test"
    },
    {
        type: 'checkbox',
        message: 'What license do you want your project to have?',
        name: 'license',
        choices: ['MIT', 'ISC', 'Open Software License 3.0', 'Do What The F*ck You Want To Public License']
      },
      {
        type: "input",
        message: "What is your GitHub username?",
        name: "gitname"
    },
    {
        type: "input",
        message: "Provide instructions for running tests.",
        name: "test"
    },
    {
        type: 'input',
        name: 'contact',
        message: 'What is your email address?'
      },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
