describe("com.quickteller login page", () => {
  let prop;

  before(() => {
    cy.fixture("base").then((p) => {
      prop = p;
    });
  });
  beforeEach(() => {
    cy.visit(prop.baseUrl);
  });

  it("verify login page Url", () => {
    let actualUrl = cy.url();
    actualUrl.should("include", "quickteller").and("eq", prop.baseUrl);
  });
});
