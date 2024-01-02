const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "9t7exf",
  reporter: "cypress-mochawesome-reporter",
  //pageLoadTimeout: 80000,
  //responseTimeout: 10000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
      screenshotOnRunFailure = true;
    },
  },
});
