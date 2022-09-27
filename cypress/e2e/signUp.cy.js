describe("start", () => {
  it("visit", () => {
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
  // it("add community", () => {
  //   cy.get('a[href="/communities"]').click();
  //   cy.get('a[href="/create-community"]').click();
  //   cy.get("#community-name").type("Ctest");
  //   cy.get("#suborg-name-singular").type("Singular");
  //   cy.get("#suborg-name-plural").type("Plural");
  //   cy.get("#color-one").type("#FFF");
  //   cy.get("#color-two").type("#FFF");
  //   cy.get("#color-three").type("#FFF");
  //   cy.get("#color-four").type("#FFF");
  // });
});
