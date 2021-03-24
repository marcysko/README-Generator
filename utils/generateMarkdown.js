function generateMarkdown(data, result) {
  return `
# ${data.title}
## Description
${data.description}
## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  
  * [License](#License)
  
  * [Contributing](#Contributing)
  
  * [Tests](#Tests)
  
  * [Questions](#Questions)
## Installation
To install necessary dependencies, run the following command:
${data.dependencies}
### Usage
${data.usage}
### License
![${data.license} License](https://img.shields.io/badge/license-${data.license}-blue.svg)
### Contributing
${data.contributing}
### Tests
To run tests, please execute the following command(s):
${data.tests}
### Questions
<img src="${result.avatar_url}" alt="avatar" style="border-radius: 16px" width="30">
If you have additional questions about this repository, reach me at [${result.name}](https://api.github.com/users/${result.login}) directly at ${result.email || "NA"}.
`;
}

module.exports = generateMarkdown;