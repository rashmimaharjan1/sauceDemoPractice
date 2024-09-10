const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "5dq4t8",
  e2e: {
    baseUrl: 'https://www.saucedemo.com/v1/',

    reporter: 'mochawesome',
    reporterOptions: {
      "charts":true,
      "overwrite": false,
     "html":false,
      "json": true,
      "reporterDir": "cypress/reports/"

    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
