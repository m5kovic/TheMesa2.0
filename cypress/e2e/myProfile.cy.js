import { editProfile } from "../pageObjects/editProfile";

describe("start", () => {
  let userData = {
    name: "Kayser",
    surname: "Soze",
    location: "bay",
    bio: "cold blooded killer",
    photo: "cypressImage.jpg",
    coverImage: "testImage.png",
  };
  beforeEach("login", () => {
    cy.loginSession(Cypress.env("email"), Cypress.env("password"));
  });
  it("Edit profile info", () => {
    cy.visitBaseURL();
    cy.intercept(
      "GET",
      "https://api-dev.themesa.org/api/65c21d0a-bac7-48af-acd8-69f6a0115c34/Onboardings/me/personalInformation?invitationType=0"
    ).as("profInfo");
    editProfile.edit(
      userData.name,
      userData.surname,
      userData.location,
      userData.bio,
      userData.photo,
      userData.coverImage
    );
    editProfile.fullName.should(
      "contains.text",
      userData.name + " " + userData.surname
    );
    editProfile.bio.should("contains.text", userData.bio);
  });
});
