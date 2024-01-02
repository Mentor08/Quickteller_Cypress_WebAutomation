class Login {
  login_emailfield = '.inside__input[name="email"]';

  login_passwordfield = '.inside__input[name="password"]';

  login_remember_me_checkbox =
    "div.other__login__details > .login__remember__me";

  forgotpassword_xpathlink = '//a[contains(text(),"Forgot Password?")]';

  login_submitbtn = 'button[type="submit"]';

  phnumber_signin_link = "button[id='goggleSignIn'] span";

  login_phnnumber_countrycodefield = ".text";

  login_phnnumber_countrycode_inputfield = ".dropdown__search > input";

  login_phnnumber_countrycode =
    'div[class="menu transition visible"] > div[class="scrolling menu transition"] > div[class="item"]';

  login_phnnumber_inputfield = "input[placeholder='08012345678']";

  google_signin_link = "#google__btn > div.S9gUrf-YoZ4jf";

  login_firstname_field = "input[placeholder='Enter your first name']";

  login_lastname_field = "input[placeholder='Enter your last name']";

  login_gender = ".select-gender";

  login_DOB = "input[placeholder='DD/MM/YYYY']";

  login_nextbtn = "button[type='submit'] p";

  login_pin =
    "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > section:nth-child(1) > section:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)";

  login_pin_confirm =
    "div[class='set__transaction__pin__wrapper'] div button[type='button'] p";

  login_setpin_btn =
    "div[class='set__transaction__pin__wrapper'] div button[type='button'] p";

  login_personalize_acct =
    "div[class='ui page modals dimmer transition visible active'] button:nth-child(1) p:nth-child(1)";

  login_personalize_acct_optns = ".preferences__wrapper > div";

  login_verifyacct = ".user_name";

  login_acct_dropdown = ".user__dropdown > img";

  logout = "div[class='nav__bar__logout'] p";

  logout_confirm = "button[type='submit'] p";

  invalid_password = "div[class='toast-enter'] h5";

  invalid_number = 'i[class="info circle icon"]';

  setLoginEmail(email) {
    cy.get(this.login_emailfield)
      .should("exist")
      .type(email)
      .should("have.value", email);
  }

  setLoginPassword(password) {
    cy.get(this.login_passwordfield)
      .should("exist")
      .type(password)
      .should("have.value", password);
  }

  rememberMeCheckbox() {
    cy.get(this.login_remember_me_checkbox)
      .should("not.be.checked")
      .check()
      .should("be.checked");
  }

  clickOnForgottenPasswordLink() {
    cy.xpath(this.forgotpassword_xpathlink).should("exist").click();
  }

  clickOnSubmitBtn() {
    cy.get(this.login_submitbtn).should("exist").click();
  }

  clickOnLoginUsingPhoneNumber() {
    cy.get(this.phnumber_signin_link).should("exist").click();
  }

  clickOnPhNumberCountryCode = () => {
    cy.get(this.login_phnnumber_countrycodefield).click();
  };

  setPhoneNumber(phoneNumber) {
    cy.get(this.login_phnnumber_inputfield)
      .type(phoneNumber)
      .should("have.value", phoneNumber);
  }

  setLoginCountryCode(countryname) {
    cy.get(this.login_phnnumber_countrycode_inputfield).type(countryname);
    cy.get(this.login_phnnumber_countrycode)
      .contains(countryname)
      .click({ force: true })
      .should("have.text", countryname);
  }
  setLoginFirstName(firstname) {
    cy.get(this.login_firstname_field)
      .type(firstname)
      .should("have.value", firstname);
  }
  setLoginLastName(lastname) {
    cy.get(this.login_lastname_field)
      .type(lastname)
      .should("have.value", lastname);
  }
  setLoginGender(gender) {
    cy.get(this.login_gender).type(gender).should("have.text", gender);
  }

  setLoginDOB(date) {
    cy.get(this.login_DOB).type(date).should("include", date);
  }

  clickOnNext() {
    cy.get(this.login_nextbtn).should("exist").click();
  }

  setLoginPin(pin) {
    cy.get(this.login_pin).type(pin).should("include", pin);
    cy.get(this.login_pin_confirm).click();
  }

  clickOnSetPinBtn() {
    cy.get(this.clickOnSetPinBtn).should("exist").click();
  }
  clickOnPersonalizeAcct() {
    cy.get(this.login_personalize_acct).should("be.visible").click();
    cy.get(this.login_personalize_acct_optns).each(($el, index, $list) => {
      cy.wrap($el).click();
    });
  }

  verifySuccessfulLogin(accountname) {
    cy.get(this.login_verifyacct)
      .should("be.visible")
      .and("have.text", accountname);
  }

  clickOnAcctDropdown() {
    cy.get(this.login_acct_dropdown).should("exist").click();
  }

  clickOnLogout() {
    cy.get(this.logout).should("have.text", "Logout").click();
  }

  confirmLogout() {
    cy.get(this.logout_confirm).should("exist");
  }

  verifyInvalidPassword() {
    cy.get(this.invalid_password)
      .should("exist")
      .and("have.text", "Incorrect password");
  }

  verifyInvalidNumber() {
    cy.get(this.invalid_number)
      .should("exist")
      .and("have.text", "Provide a valid phone number");
  }

  clickOnLoginUsingGoogle() {
    cy.get(this.google_signin_link).click();
  }
}
export default Login;
