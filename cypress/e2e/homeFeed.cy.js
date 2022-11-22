import { homeFeed } from "../pageObjects/homeFeed";
import { createPost } from "../pageObjects/post";

describe("start", () => {
  let postBody = "pomPost";
  beforeEach("login", () => {
    cy.loginSession(Cypress.env("email"), Cypress.env("password"));
  });
  it.only("Create a post", () => {
    cy.visitBaseURL();
    createPost.create(postBody);
    cy.contains("p", postBody).should("be.visible");
    cy.get("span").contains("a few seconds ago").should("be.visible");
  });
  it("visit stage login", () => {
    cy.visit("https://cy.app-dev.themesa.org/login");
    cy.wait(10000);
    cy.get("header").find("button").eq(3).click();
    // cy.contains("AAATest-sorg").click();
    // cy.contains("See all").click();
    // cy.contains("Test User4").should("be.visible");
  });
});
