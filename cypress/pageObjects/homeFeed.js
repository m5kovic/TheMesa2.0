export default class HomeFeed {
  get createBtn() {
    return cy.contains("button", "Create");
  }
  get sidePanel() {
    return cy.get("header").find("button").eq(3);
  }
  get navHome() {
    return cy.get('href="/"');
  }
  get navDiscover() {
    return cy.get('href="/discover"');
  }
  get navMyCommunity() {
    return cy.get('href="/community"');
  }
  get navMyGroups() {
    return cy.get('href="/groups"');
  }
}

export const homeFeed = new HomeFeed();
