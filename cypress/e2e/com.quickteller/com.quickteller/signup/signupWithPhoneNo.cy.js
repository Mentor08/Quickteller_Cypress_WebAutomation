import Signup from "../../../../../PageObjects/SignupPage";
describe("sign up an account with phone number", () => {
  // creating global variables to be accessed from all the "it" blocks
  let data;
  let reg;

  before(() => {
    // importing registration data from the fixture
    cy.fixture("signup").then((d) => {
      data = d;
    });

    // creating object instance for Signup class(POM)
    reg = new Signup();
  });

  beforeEach(() => {
    // launch the page url
    cy.visit(data.baseUrl);
  });

  it("registration test using page object model", () => {
    reg.clickOnRegPhoneNumberLink();
    reg.clickOnRegPhoneNumberCountryCode();
    // enter your country name
    reg.setRegPhoneNumberCountry("Nigeria");
    reg.clickOnRegPhonenumberInputfield();
    // enter your phone number
    reg.setRegPhoneNumber("081" + Math.round(Math.random() * 10e7));
    reg.acceptTermsAndConditions();
    cy.screenshot();
    reg.clickOnSubmitBtn();
    // delay to receive OTP
    cy.wait(5000);
    // enter OTP received
    reg.setRegOTP("123456");
    cy.screenshot();
    // delay to validate OTP
    cy.wait(5000);
    // enter your desired password
    reg.setRegPassword("Abc12345.");
    // enter your desired password
    reg.setRegConfirmPassword("Abc12345.");
    cy.screenshot();
    reg.clickOnSubmitBtn();
    cy.wait(20000);
    reg.clickOnGetStarted();
    // enter your desired first name
    reg.setRegFirstName("may");
    // enter your desired last name
    reg.setRegLastName("dav");
    // enter your gender
    reg.setRegGender("Female");
    // enter your date of birth in DD,MMMM,YYYY format
    reg.setRegDOB("29", "January", "1996");
    // click on next button
    reg.clickOnNext();
    cy.wait(10000);
    // set your desired pin
    reg.setRegPin("1357");
    // click on set pin button
    cy.screenshot();
    reg.clickOnSetPinBtn();
    // click on personalize Acct button
    reg.clickOnPersonalizeAcct();
    // enter your first name and last name with a space in between
    reg.verifySuccessfulReg("may dav");
    cy.screenshot();
    // click on Acct dropdown button
    reg.clickOnAcctDropdown();
    // click on logout Acct button
    reg.clickOnLogout();
    // confirm if logout is successful
    reg.confirmLogout();
  });
});
