const { defineConfig } = require("cypress");

module.exports = defineConfig({

  projectId: 'iqjavs',

  e2e: {

    watchForFileChanges: false,
    defaultCommandTimeout: 30000,
    requestTimeout: 30000,
    responseTimeout: 60000,
    viewportWidth: 1480,
    viewportHeight: 780,
    video: false,
    chromeWebSecurity: false,
    retries:1,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      screenshotOnRunFailure=true;
      
    },

    testIsolation: false
  },
});
