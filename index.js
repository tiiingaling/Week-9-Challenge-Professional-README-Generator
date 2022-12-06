// TODO: Include packages needed for this application
const inquirer = require('inquirer');
var fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ([

    {
        type: 'input',
        name: 'title',
        message: 'What is the title for your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project',
    },
    {
        type: 'input',
        name: 'installation instructions',
        message: 'Does this require installation?',
    },
    {
        type: 'input',
        name: 'usage information',
        message: 'How do you use this project?',
    },
    {
        type: 'input',
        name: 'contribution guidelines',
        message: 'How do others contribute to this project?',
    },
        {
        type: 'input',
        name: 'test instructions',
        message: 'How do you test this project?',
    },
])
    .then((answers) => {
        const ReadmeContent = generateMarkdown(answers);

        fs.writeToFile('README.md', ReadmeContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
        );
    });


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
