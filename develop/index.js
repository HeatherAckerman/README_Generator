const fs = require('fs');
const inquirer = require("inquirer");
const axios = require("axios");
const generateMarkdown = require('./utils/generateMarkdown');

const getInfo = [
    {
        message: "What is your project title?",
        name: "title",
        type: "input"
    },
    {
        message: "Write a short description of your project.",
        name: "description",
        type: "input"
    },
    {
        message: "What are the usage instructions for your project?",
        name: "useInstructions",
        type: "input"
    },    
    {
        message: "What technologies does your project use?",
        name: "technologies",
        type: "input"
    },
    {
        message: "List any plans for future upgrades.",
        name: "futureUpgrades",
        type: "input"
    },
    {
        message: "List any acknowledgements.",
        name: "acknowledgements",
        type: "input",
    },
    {
        message: "What does the user need to know about contributing to the repo?",
        name: "contributionInfo",
        type: "input"
    },
    {
        message: "What testing information do you wish to include?",
        name: "tests",
        type: "input",
    },
    {
        message: "What kind of license should your project have?",
        name: "license",
        type: "input",
    },
    {
        message: "Enter your GitHub username to add a link to your GitHub profile for users to ask questions.",
        name: "githubUsername",
        type: "input"
    },
    {
        message: "Enter your email address so users are able to reach you with additional questions.",
        name: "emailAddress",
        type: "input"
    },

];

function init() {
    inquirer
  .prompt(getInfo)
  .then(function(response){
    
    const queryUrl = `https://api.github.com/users/${response.githubUsername}`;

    axios.get(queryUrl).then(function(res) {

        const githubInfo = {
            email: res.data.email,
            name: res.data.name
        };
        
      fs.writeFile("README.md", generateMarkdown(response,githubInfo), function(err) {
        if (err) {
          throw err;
        };
        console.log("Your README was successfully created!");
      });
    });

});
  
};

init();


