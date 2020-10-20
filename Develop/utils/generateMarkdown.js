// function to generate markdown for README
function generateMarkdown(answers) {
  return `
  
  ## ${answers.title}

  ### Description
  ${answers.description}

  ### Table of Contents 
  <br>
  1. [Installation](#install)<br>
  2. [Usage](#usage)<br>
  3. [Contribution](#contribution)<br>
  4. [Test Instructions](#test)<br>
  <br>

  ### Installation
  ${answers.install}

  ### Usage
  ${answers.usage}

  ### Contribution
  ${answers.contribution}

  ### Tests
  ${answers.test}

  ### Questions

  Email: ${answers.email}
  Github: https://github.com/${answers.github}
  © ${answers.license} 
`;
}


module.exports = generateMarkdown;
