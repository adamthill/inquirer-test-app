// basically, example from https://github.com/SBoudrias/Inquirer.js#documentation

const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    }
];

// debugger; // un-comment to see an linting error

inquirer.prompt(questions).then(answers => {
    console.log(JSON.stringify(answers));
});
