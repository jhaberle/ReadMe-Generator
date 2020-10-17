const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = ("./utils/generateMarkdown");


// array of questions for user
const questions = [
    {
    type: "input",
    message: "What is the title of the project?",
    name: "title"
    },
    {
        type: "input",
        message: "Write a brief description of the project",
        name: "description"
    },
    {
        type: "input",
    message: "What are the installation instructions?",
    name: "install"
    },
    {
        type: "input",
        message: "What is the usage of the application?",
        name: "usage"  
    },
    {
        type: "input",
        message: "Are there any contribution guidelines?",
        name: "contribution" 
    },
    {
        type: "input",
        message: "What are the test instructions?",
        name: "test"   
    },
    {
        type: "list",
        message: "Is there a license preference for the project?",
        name: "license",
        choices: [
          "ISC", 
          "GNU", 
          "MIT", 
          "Apache"
        ]
    },
    {
        type: "input",
        message: "Enter github user name",
        name: "github" 
    },
    {
        type: "input",
        message: "Enter email address",
        name: "email"
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
