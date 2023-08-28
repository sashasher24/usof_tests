const { defineConfig } = require("cypress");
require('dotenv').config({path: '.env'});

module.exports = defineConfig({
  e2e: {
    projectId: "8iruev",
    specPattern: 'cypress/e2e/*.cy.js',
    viewportHeight: 720,
    viewportWidth: 1280,
    defaultCommandTimeout: 8000,
    watchForFileChanges: false,
    chromeWebSecurity: false,
    retries: {
      openMode: 0,
      runMode: 1
    },
    setupNodeEvents(on, config) {
        require('@cypress/grep/src/plugin')(config);
        return config;
    },
  },
  env: {
    grepFilterSpecs: true,
    grepOmitFiltered: true,
    env: "dev",
    ...process.env,
  }
});