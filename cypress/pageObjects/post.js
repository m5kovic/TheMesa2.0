export default class Post {
  get createBtn() {
    return cy.contains("button", "Create");
  }
  get inputField() {
    return cy.get('div[data-placeholder="Enter the post text..."]');
  }
  get selectTopicBtn() {
    return cy.contains("button", "Select topic");
  }
  get topic() {
    return cy.xpath(
      "/html[1]/body[1]/div[2]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[8]/button[1]"
    );
  }
  get doneBtn() {
    return cy.contains("button", "Done");
  }
  get postBtn() {
    return cy.contains("button", "Post");
  }
  get attachBtn() {
    return cy.get('input[type="file"]');
  }
  get linkBtn() {
    return cy.xpath(
      `//body/div[@id='modal']/div[1]/div[2]/div[1]/div[4]/button[2]`
    );
  }
  get linkTextInput() {
    return cy.get("input#link-text");
  }
  get linkUrlInput() {
    return cy.get("input#link-url");
  }
  get addLinkBtn() {
    return cy.xpath(`//button[contains(text(),'Add link')]`);
  }

  create(postBody) {
    this.createBtn.click();
    this.inputField.click().type(postBody);
    this.selectTopicBtn.click();
    this.topic.click({ force: true });
    this.doneBtn.click();
    this.postBtn.click();
  }

  createBig(postBody, linkText, linkUrl) {
    this.createBtn.click();
    this.inputField.click().type(postBody);
    this.selectTopicBtn.click();
    this.topic.click({ force: true });
    this.doneBtn.click();
    this.attachBtn.attachFile("cypressImage.jpg");
    this.linkBtn.click();
    this.linkTextInput.type(linkText);
    this.linkUrlInput.type(linkUrl);
    this.addLinkBtn.click();
    this.postBtn.click();
  }
}

export const createPost = new Post();
