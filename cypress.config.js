const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/v1/',

    reporter: 'mochawesome',

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
