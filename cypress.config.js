const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1280,
    viewportHeight:780,
    reporter: 'mochawesome',
    video: false,
    screenshotsFolder: 'cypress/report/assets',
    reporterOptions: {
      reportDir: 'cypress/report',
      overwrite: false
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
