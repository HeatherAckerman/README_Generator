function generateMarkdown(response, githubInfo) {

    return `
  # ${response.title}

  ## Description 
  ${response.description}

  ## Table of contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributing](#Contributing)
  - [Test](#Test)
  - [License](#License)
  - [Questions](#Questions) 

  ## Installation
  ${response.installInstructions}

  ## Usage
  ${response.useInstructions}

  ## Contributing
  ${response.contributionInfo}

  ## Test
  ${response.tests}

  
  ## Licence
  ${response.license}

  ## Questions
  ${githubInfo.profile}<br>
  ${githubInfo.name}
  `;
};
  
  module.exports = generateMarkdown;