describe("start", () => {
  beforeEach("", () => {
    cy.loginSession("milos.petkovic+17@vegait.rs", "Test123!");
  });
  it("visit myProfile", () => {
    cy.visit("app-test.themesa.org/login");
    cy.get('button[class="sc-jSUZER dkpEer sc-brePNt hoOkuX"]').click();
    cy.get('a[href="/myProfile"]').click();
  });
  it("visit subOrgs", () => {
    cy.visit("app-test.themesa.org/login");
    cy.get('a[href="/community"]').click();
    cy.contains("Beta Test").click();
  });
});
