export default class Profile {
  get sidePanel() {
    return cy.get("header").find("button").eq(3);
  }
  get viewProfileBtn() {
    return cy.get('a[href="/myProfile"]');
  }
  get carousel() {
    return cy.xpath(
      "/html[1]/body[1]/div[1]/div[2]/div[1]/main[1]/div[1]/div[1]/div[2]/div[2]/button[1]"
    );
  }
  get editProfileBtn() {
    return cy.xpath("//button[contains(text(),'Edit profile')]");
  }
  get saveBtn() {
    return cy.get('button[type="submit"]');
  }
  get profPicture() {
    return cy.get('input[name="image-upload"]');
  }
  get coverImage() {
    return cy.get('input[id="cover-image"]');
  }
  get firstNameInput() {
    return cy.get('input[name="firstName"]');
  }
  get lastNameInput() {
    return cy.get('input[name="lastName"]');
  }
  get locationInput() {
    return cy.get('div[id="profile-location"]');
  }
  get locationOption() {
    return cy.get('div[id="react-select-6-option-3"]');
  }
  get shortBioInput() {
    return cy.get('textarea[placeholder="Add short bio..."]');
  }
  get fullName() {
    return cy.get("h1").eq(1);
  }
  get bio() {
    return cy.get("p");
  }

  edit(name, surname, location, bio, image) {
    this.sidePanel.click();
    this.viewProfileBtn.click();
    this.coverImage.attachFile("testImage.png");
    this.carousel.click();
    this.editProfileBtn.click({ force: true });
    this.firstNameInput.clear().type(name);
    this.lastNameInput.clear().type(surname);
    this.locationInput.click().type(location);
    this.profPicture.attachFile(image);
    cy.intercept(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${location}&apiKey=bfa21a5a7cf14fd69eba701d9e1b8878&limit=20&format=json`
    ).as("location");
    cy.wait("@location");
    this.locationOption.click();
    this.shortBioInput.clear().type(bio);
    this.saveBtn.click();
  }
}

export const editProfile = new Profile();
