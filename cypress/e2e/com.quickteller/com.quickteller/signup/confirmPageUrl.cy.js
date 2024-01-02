describe("com.quickteller - URL", () => {
  let data;

  before(() => {
    cy.fixture("signup").then((d) => {
      data = d;
    });
  });

  beforeEach(() => {
    cy.visit(data.baseUrl);
  });

  specify("confirm page", () => {
    cy.visit(data.baseUrl).contains(data.expected);
  });

  specify("confirm page Url - positive test", () => {
    let actualUrl = cy.url();
    actualUrl.should("include", "quickteller").and("eq", data.baseUrl);
  });

  it("confirm page Url - negative test", () => {
    let actualUrl = cy.url();
    cy.log(actualUrl);
    expect(actualUrl).to.eq("example.com");
  });
});
