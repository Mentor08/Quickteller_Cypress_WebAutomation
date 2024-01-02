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

  it("verify login page title", () => {
    let actualTitle = cy.title();
    actualTitle.should("eq", prop.title);
  });
});
