// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${answers.title}

  ##Table of Content
  -[Description](#description)
  -[Installation](#installation)
  -[Usage information](#usage)
  -[Contributing](#contributing)
  -[Tests](#tests)
  -[Questions](#questions)
  -[License](#license)

  ##Description
  ${answers.description}

  ##Installation
  ${answers.installation}
`;
}

module.exports = generateMarkdown;
