/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>
require("cypress-xpath");

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

Cypress.Commands.add("visitBaseURL", () => {
  cy.visit("https://cy.app-dev.themesa.org/login");
  // cy.intercept(
  //   "GET",
  //   "https://api-dev.themesa.org/api/65c21d0a-bac7-48af-acd8-69f6a0115c34/Feeds/realhome"
  // ).as("feed");
  // cy.wait("@feed");
});
