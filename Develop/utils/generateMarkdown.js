function generateProjectUrl(gitHub, title) { 
  const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
  return `https://github.com/${gitHub}/${kebabCaseTitle}`;
} 

function renderLicense(license, gitHub, title) {
  if(licence !== "None"){
    return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectUrl(gitHub, title)})`
  }
  return " "
}


function renderLicenseResponse(license) {
  if(licence !=="None"){
    return (
      `## License
      This project is licensed under the ${license} license.`
        )
    }
      return ''
}

function generateMarkdown(data) {
  return `
# ${data.title}

`;
}

module.exports = generateMarkdown;
