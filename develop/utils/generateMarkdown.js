function generateMarkdown(response, githubInfo) {

    return `
  # ${response.title}

  ## Table of contents
  - [Description](#Description)
  - [Usage](#Usage)
  - [Technologies](#Technologies)
  - [Future_Upgrades](#Future_Upgrades)
  - [Acknowlegements](#Acknowlegements)
  - [Contributing](#Contributing)
  - [Test](#Test)
  - [License](#License)
  - [Questions](#Questions) 

  ## Description 
  ${response.description}

  ## Usage
  ${response.useInstructions}

  ## Technologies
  ${response.technologies}

  ## Future_Upgrades
  ${response.futureUpgrades}

  ## Acknowledgements
  ${response.acknowledgements}

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