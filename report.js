const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber_report.json',
  output: 'reports/cucumber_report.html',
  reportSuiteAsScenarios: true,
  launchReport: false,
  metadata: {
    "Test Environment": "Docker",
    "Browser": "Chromium",
    "Platform": "Linux",
    "Executed": "Docker Container"
  }
};

reporter.generate(options);