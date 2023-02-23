// TODO: Include packages needed for this application
const inquirer = require('inquirer');
var fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a brief description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions for your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the usage information for your project?',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'What are the contribution guidelines for your project?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'What are the test instructions for your project?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license would you like to use for your project?',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  }


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
      const readmeContent = generateMarkdown(answers);
      writeToFile('READMEtest.md', readmeContent);
    });
  }
// Function call to initialize app
init();


