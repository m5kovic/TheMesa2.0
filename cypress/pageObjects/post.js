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
    return cy.get("div.sc-bBXxYQ.ivYzsR").children().eq(13);
  }
  get doneBtn() {
    return cy.contains("button", "Done");
  }
  get postBtn() {
    return cy.contains("button", "Post");
  }

  create(postBody) {
    this.createBtn.click();
    this.inputField.click().type(postBody);
    this.selectTopicBtn.click();
    this.topic.click();
    this.doneBtn.click();
    this.postBtn.click();
  }
}

export const createPost = new Post();
