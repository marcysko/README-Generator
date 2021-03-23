// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
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
        message: "Provide instructions and examples for use.",
        name: "usage",
    },
    {
        type: "input",
        message: "What guidelines do you want to add for other developers to contribute?",
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
  






]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
