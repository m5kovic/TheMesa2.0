const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // chromeWebSecurity: false,
  // scrollBehavior: "nearest",
  e2e: {
    baseUrl: "https://cy.app-dev.themesa.org/",
    env: {
      email: "milos.petkovic+cy1@vegait.rs",
      password: "Test123!",
    },
    experimentalSessionAndOrigin: true,
    requestTimeout: 20000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
