function generateProjectUrl(gitHub, title) { 
  const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
  return `https://github.com/${gitHub}/${kebabCaseTitle}`;
}

function renderLicense(license, gitHub, title) {

  if(license !== "None") {
    return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectUrl(gitHub, title)})`
  }
  return " "
}


function renderLicenseResponse(license) {
  if(license !=="None") {
    return (
      `## License
      This project is licensed under the ${license} license.`
        )
    }
      return ''
}

function generateMarkdown(data) {
  // console.log(data.license);
  return `
# ${data.title}
${renderLicense(data.license, data.gitHub, data.title)}

## description
${data.description}
## Table of Contents
# installation
To install the dependencies run this command:
${data.installation}
# usage
${data.usage}
* [Contributing](#contributing)
${data.contributing}
* [Tests](#tests)
${data.tests}
#questions

<img src="data.avatar_url"/>

Contact this user at ${data.email}



`;
}

module.exports = generateMarkdown;

