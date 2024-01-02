context("com.quickteller - title", () => {
  let data;

  before(() => {
    cy.fixture("signup").then((d) => {
      data = d;
    });
  });

  beforeEach(() => {
    cy.visit(data.baseUrl);
  });

  specify("verify signup page title", () => {
    let actualTitle = cy.title();
    actualTitle.should("eq", data.title);
  });
});
