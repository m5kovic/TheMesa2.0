import { homeFeed } from "../pageObjects/homeFeed";
import { createPost } from "../pageObjects/post";

describe("start", () => {
  let postBody = "Kolo Muani";
  let linkText = " Not a World Champ";
  let linkUrl = "https://www.fifa.com/fifaplus/en/watch/1R9QDQ3kjOVPkbG4YnJknx";
  beforeEach("login", () => {
    cy.loginSession(Cypress.env("email"), Cypress.env("password"));
  });
  it("Create a lite post", () => {
    cy.visitBaseURL();
    createPost.create(postBody);
    cy.contains("p", postBody).should("be.visible");
    cy.xpath("//span[contains(text(),'a few seconds ago')]").should(
      "be.visible"
    );
  });
  it.only("create post with attachment and link", () => {
    cy.visitBaseURL();
    createPost.createBig(postBody, linkText, linkUrl);
    cy.contains("p", postBody).should("be.visible");
    cy.wait(500);
    cy.xpath("//span[contains(text(),'a few seconds ago')]").should(
      "be.visible"
    );
  });
});
