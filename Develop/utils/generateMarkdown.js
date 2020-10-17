// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ## Description
  ${answers.description}

  # Table of Contents 
  <br>
  1. [Installation](#install)
  2. [Usage](#usage)
  3. [Contribution](#contribution)
  4. [Test Instructions](#test)
  <br>

  # Installation
  ${answers.install}

  # Usage
  ${answers.usage}

  # Contribution
  ${answers.contribution}

  # Tests
  ${answers.test}

  # Questions

  Email: ${answers.email}
  Github: https://github.com/${answers.github}
  © ${answers.license} 
`;
}

module.exports = generateMarkdown;
