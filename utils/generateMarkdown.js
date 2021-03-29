function generateMarkdown(data, result) {
  return `
# ${data.title}
## Licensing:
  [![license](https://img.shields.io/badge/license-${data.license}-yellow)](https://shields.io)

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
What are the steps required to install your project?
${data.installation}
### Usage
${data.usage}
### License
${data.license}
### Contributing
${data.contributing}
### Tests
Provide instructions for running tests:
${data.test}
## Questions
* For questions, please reach out to me at ${data.contact}
* Find me on Github at [${data.gitname}](http://github.com/${data.gitname})`;
  
}


module.exports = generateMarkdown;
