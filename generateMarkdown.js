// Function generates the license badge
function renderLicenseBadge(license) {
  // If a license was selected, return a corresponding badge image
  if (license !== 'None') {
    const licenseLink = `https://img.shields.io/badge/license-${license}-brightgreen`;
    return `![License](${licenseLink})\n`;
  }
  // Otherwise, return an empty string
  return '';
}


function generateMarkdown(data) {
  // Generate the license badge
  const licenseBadge = renderLicenseBadge(data.license);

  // Generate the README content using the provided user input
  return `# ${data.title}

  ${licenseBadge}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This application is covered under the ${data.license} license.

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  For questions or additional information, please contact ${data.email}. You can also visit my [GitHub profile](https://github.com/${data.github}).
  `;
}


module.exports = generateMarkdown;
