function generateProjectUrl(gitHub, title) {
  const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
  return `https://github.com/${gitHub}/${kebabCaseTitle}`;
}

function renderLicense(license, gitHub, title) {

  if (license !== "None") {
    return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectUrl(gitHub, title)})`
  }
  return " "
}


function renderLicenseResponse(license) {
  if (license !== "None") {
    return (
      `## License
      This project is licensed under the ${license} license.`
    )
  }
  return ''
}

function generateMarkdown(data) {
  return `
##User:
${data.name}

##Title:
${data.title}
${renderLicense(data.license, data.gitHub, data.title)}

###User image
${data.avatar_url}

###Description:
${data.description}

###Installation:
${data.installation}

###Usage:
${data.usage}

###Contribution:
${data.contributing}

###Test
${data.tests}



####Contact this user at ${data.email}
`;
}


module.exports = generateMarkdown;

// avatar_url: 'https://avatars3.githubusercontent.com/u/11791361?v=4'