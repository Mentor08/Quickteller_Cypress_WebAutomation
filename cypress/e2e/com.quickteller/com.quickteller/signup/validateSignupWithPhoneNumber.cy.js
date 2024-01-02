import Register from "../../../../../PageObjects/SignupPage";
describe("register an account with phone number", () => {
  // creating global variables to be accessed from all the "it" blocks
  let data;
  let reg;

  before(() => {
    // importing registration data from the fixture
    cy.fixture("signup").then((d) => {
      data = d;
    });

    // creating object instance for Register class (page object model)
    reg = new Register();
  });

  beforeEach(() => {
    // launch the page url
    cy.visit(data.baseUrl);
  });

  it("validate if registration is successful", () => {
    reg.clickOnRegPhoneNumberLink();
    reg.clickOnRegPhoneNumberCountryCode();
    // enter your country name
    reg.setRegPhoneNumberCountry("Nigeria");
    reg.clickOnRegPhonenumberInputfield();
    // enter your phonenumber
    reg.setRegPhoneNumber("08136320509");
    reg.acceptTermsAndConditions();
    reg.clickOnSubmitBtn();
    cy.wait(2000);
    reg.validateRegistration();
  });
});
