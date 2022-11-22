/// <reference types="Cypress"/>

import "cypress-file-upload";

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

Cypress.Commands.add("loginSession", (email, password) => {
  cy.session([email, password], () => {
    cy.visit("/");
    cy.origin(
      "https://auth-dev.themesa.org:8443/",
      { args: [email, password] },
      ([email, password]) => {
        cy.get("#username").type(email);
        cy.get("#password").type(password);
        cy.get("#kc-login").click();
      }
    );
  });
});
