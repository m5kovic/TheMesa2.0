describe("create profile", () => {
  it("login", () => {
    cy.visit("https://app-dev.themesa.org/");
    cy.get(".kc-page-title").should(
      "contain.text",
      "Welcome to  The Mesa Community"
    );
    cy.get("#username").type("test@vegait.rs");
    cy.get("#password").type("test1234");
    cy.get('input[name="login"]').should("be.visible").click();
    cy.url().should("eq", "https://app-dev.themesa.org/");
  });
  it("create profile", () => {
    cy.get('a[href="/onboarding/profile"]').should("be.visible").click();
    cy.url().should("eq", "https://app-dev.themesa.org/onboarding/profile");
    cy.get('input[type="file"]').attachFile("testImage.png");
    cy.get("img.file__thumbnail").should("be.visible");
    cy.get("#profile-firstName").type("testName");
    cy.get("#profile-lastName").type("testSurName");
    cy.get("#pronouns").click();
    cy.contains("He/Him").click();
    cy.get('input[name="location"]').type("Maroco");
    cy.get('button[type="submit"]')
      .scrollIntoView()
      .should("be.visible")
      .click();
  });
});
