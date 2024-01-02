import Login from "C:\\Users\\USER\\Desktop\\Quickteller_cypress\\PageObjects\\LoginPage.js";

//creating object instance for Login class
let ln = new Login();
let basedata;
context("com.quickteller-new user login", () => {
  before(() => {
    //importing base file from fixture folder
    cy.fixture("base").then((d) => {
      basedata = d;
    });
  });
  beforeEach(() => {
    cy.visit(basedata.baseUrl);
  });
  specify("returning user login using custom command", () => {
    //custom command for login: loginWithPhoneNumber(countryName, phoneNumber, password)
    cy.loginWithPhoneNumber(
      // enter your country code
      "Nigeria",
      // enter your phonenumber
      "08107029351",
      // enter your password
      "Abc12345."
    );
    // custom command
    //cy.selectRememberMe();
    // custom command- click on submit
    cy.clickOnSubmit();
    cy.wait(5000);
    // enter your first name & last name
    cy.verifySuccessfulLogin("may dav");
    // custom command
    cy.logout();
    // custom command
    cy.confirmLogout();
  });
  specify("returning user login using 'page object model'", () => {
    ln.clickOnLoginUsingPhoneNumber();
    //cy.wait(2000);
    ln.clickOnPhNumberCountryCode();
    // enter your country name
    ln.setLoginCountryCode("Nigeria");
    // enter your phonenumber
    ln.setPhoneNumber("08107029351");
    // enter your password
    ln.setLoginPassword("Abc12345.");
    //ln.rememberMeCheckbox();
    cy.screenshot();
    ln.clickOnSubmitBtn();
    // enter your first name & last name
    ln.verifySuccessfulLogin("may dav");
    ln.clickOnAcctDropdown();
    ln.clickOnLogout();
    ln.confirmLogout();
    cy.screenshot();
  });

  specify("login with phone number using invalid password", () => {
    ln.clickOnLoginUsingPhoneNumber();
    //cy.wait(2000);
    ln.clickOnPhNumberCountryCode();
    // enter your country name
    ln.setLoginCountryCode("Nigeria");
    // enter your phonenumber
    ln.setPhoneNumber("08107029351");
    // enter your password
    ln.setLoginPassword(Math.floor(Math.random() * 10e9));
    //ln.rememberMeCheckbox();
    cy.screenshot();
    ln.clickOnSubmitBtn();
    cy.wait(1500);
    ln.verifyInvalidPassword();
    cy.screenshot();
  });

  specify.only("login with phone number using invalid number", () => {
    ln.clickOnLoginUsingPhoneNumber();
    //cy.wait(2000);
    ln.clickOnPhNumberCountryCode();
    // enter your country name
    ln.setLoginCountryCode("Nigeria");
    // enter your phonenumber
    ln.setPhoneNumber("810702935");
    // enter your password
    ln.setLoginPassword("Abc12345.");
    //ln.rememberMeCheckbox();
    cy.screenshot();
    //ln.clickOnSubmitBtn();
    ln.verifyInvalidNumber();
    cy.screenshot();
  });
});
