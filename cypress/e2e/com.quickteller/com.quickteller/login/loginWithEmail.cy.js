import Login from "C:\\Users\\USER\\Desktop\\Quickteller_cypress\\PageObjects\\LoginPage.js";

//creating object instance for Login class
let ln = new Login();
let logindata;
let basedata;
context("com.quickteller-new user login", () => {
  before(() => {
    //importing base file from fixture folder
    cy.fixture("base").then((d) => {
      basedata = d;
    });
    cy.fixture("new_user_login").then((data) => {
      logindata = data;
    });
  });
  beforeEach(() => {
    cy.visit(basedata.baseUrl);
  });
  specify("returning user login using 'page object model'", () => {
    // enter your email address
    ln.setLoginEmail("ekundayomayowa2013@gmail.com");
    // enter your password
    ln.setLoginPassword("Abc12345.");
    cy.screenshot();
    ln.clickOnSubmitBtn();
    ln.verifySuccessfulLogin();
    ln.clickOnAcctDropdown();
    ln.clickOnLogout();
    ln.confirmLogout();
  });
});
