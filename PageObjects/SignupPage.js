class Signup {
  //getting all the page objects from the registration page
  reg_emailfield = '.inside__input[type="email"]';

  reg_passwordfield = ":nth-child(3) > .custom__form__input";

  reg_passwordconfirmfield = ":nth-child(4) > .custom__form__input";

  reg_termsandcond_checkbox = "input[name='acceptedTermsAndConditions']";

  reg_termsandcond_xpathlink = '//a[text()="Terms & Conditions"]';

  reg_confirmation = ".account__header";

  reg_privacy_xpathlink = '//a[text()="Privacy Policy."]';

  reg_submitbtn = 'button[type="submit"]';

  reg_validation = ".toast-enter > p";

  open_emaillink = ".content_container > .ui";

  open_gmail_link = ".email_client_item:nth-child(1)";

  reg_phnumber_link = ".social__phoneNumber__btn >span";

  reg_phnumber_countrycodefield = ".select-dropdown-text";

  reg_phnumber_countrycode_inputfield =
    'div[class="menu transition visible"] > div[class="scrolling menu transition"] > div[class="item"]';

  reg_phnumber_inputfield = "input[placeholder='08012345678']";

  reg_otp_inputfield =
    "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)";

  reg_getstarted = ":nth-child(3) > .ui > p";

  reg_firstname_field = "input[placeholder='Enter your first name']";

  reg_lastname_field = "input[placeholder='Enter your last name']";

  reg_gender = ".select-gender";

  reg_DOB = "input[placeholder='DD/MM/YYYY']";

  reg_DOB_Day = ".react-datepicker__month";

  reg_DOB_Month = "div[class='date__of__birth'] select:nth-child(1)";

  reg_DOB_Year = '[style="padding: 8px;"]';

  reg_nextbtn = "button[type='submit']";

  reg_pin =
    "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > section:nth-child(1) > section:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)";

  reg_pin_confirm =
    "div[class='set__transaction__pin__wrapper'] div button[type='button'] p";

  reg_setpin_btn =
    "div[class='set__transaction__pin__wrapper'] div button[type='button'] p";

  reg_personalize_acct =
    "div[class='ui page modals dimmer transition visible active'] button:nth-child(1) p:nth-child(1)";

  reg_personalize_acct_optns = ".preferences__wrapper > div";

  reg_verifyacct = ".user_name";

  reg_acct_dropdown = ".user__dropdown > img";

  logout = "div[class='nav__bar__logout'] p";

  logout_confirm = "button[type='submit'] p";

  // creating a method
  clickOnRegPhoneNumberLink() {
    cy.get(this.reg_phnumber_link)
      .should("have.text", " Sign up with Phone Number")
      .click();
  }

  setRegEmail(email) {
    cy.get(this.reg_emailfield)
      .should("exist")
      .type(email)
      .should("have.value", email);
  }

  setRegPassword(password) {
    cy.get(this.reg_passwordfield)
      .should("exist")
      .and("be.visible")
      .type(password);
  }

  setRegConfirmPassword(passwordConfirm) {
    cy.get(this.reg_passwordconfirmfield)
      .should("exist")
      .and("be.visible")
      .type(passwordConfirm);
  }

  clickOnRegPhoneNumberCountryCode() {
    cy.get(this.reg_phnumber_countrycodefield)
      .should("exist")
      .and("be.visible")
      .click();
  }

  setRegPhoneNumberCountry(countryName) {
    cy.get(this.reg_phnumber_countrycode_inputfield)
      .should("have.length", 241)
      .contains(countryName)
      .click({ force: true })
      .should("have.text", countryName);
  }

  clickOnRegPhonenumberInputfield() {
    cy.get(this.reg_phnumber_inputfield).should("exist").click();
  }

  setRegPhoneNumber(phoneNumber) {
    cy.get(this.reg_phnumber_inputfield)
      .should("exist")
      .and("be.visible")
      .type(phoneNumber)
      .should("have.value", phoneNumber);
  }

  acceptTermsAndConditions() {
    cy.get(this.reg_termsandcond_checkbox)
      .should("not.be.checked")
      .check()
      .should("be.checked");
  }

  clickOnSubmitBtn() {
    cy.get(this.reg_submitbtn).should("be.enabled").click();
  }

  confirmRegistration() {
    cy.get(this.reg_confirmation).should("include", "Congratulations");
  }

  validateRegistration() {
    cy.get(this.reg_validation).should("have.text", "Account already exists");
  }

  clickOnOpenEmail() {
    cy.get(this.open_emaillink).should("exist").click();
  }

  clickOnGmail() {
    cy.get(this.open_gmail_link).invoke("removeAttr", "target").click();
  }

  setRegOTP(otp) {
    cy.get(this.reg_otp_inputfield).type(otp);
  }

  clickOnGetStarted() {
    cy.get(this.reg_getstarted).click();
  }

  setRegFirstName(firstname) {
    cy.get(this.reg_firstname_field)
      .type(firstname)
      .should("have.value", firstname);
  }
  setRegLastName(lastname) {
    cy.get(this.reg_lastname_field)
      .type(lastname)
      .should("have.value", lastname);
  }
  setRegGender(gender) {
    cy.get(this.reg_gender).select(gender).contains(gender);
  }

  setRegDOB(Day, Month, Year) {
    cy.get(this.reg_DOB).click();
    cy.get(this.reg_DOB_Month).select(Month);
    cy.get(this.reg_DOB_Year).select(Year);
    cy.get(this.reg_DOB_Day).contains(Day).click();
  }

  clickOnNext() {
    cy.get(this.reg_nextbtn).should("exist").click();
  }

  setRegPin(pin) {
    cy.get(this.reg_pin).type(pin).should("include", pin);
    cy.get(this.reg_pin_confirm).click();
  }

  clickOnSetPinBtn() {
    cy.get(this.clickOnSetPinBtn).should("exist").click();
  }
  clickOnPersonalizeAcct() {
    cy.get(this.reg_personalize_acct).should("be.visible").click();
    cy.get(this.reg_personalize_acct_optns).each(($el, index, $list) => {
      cy.wrap($el).click();
    });
  }

  verifySuccessfulReg(accountname) {
    cy.get(this.reg_verifyacct)
      .should("be.visible")
      .and("have.text", accountname);
  }

  clickOnAcctDropdown() {
    cy.get(this.reg_acct_dropdown).should("exist").click();
  }

  clickOnLogout() {
    cy.get(this.logout).should("have.text", "Logout").click();
  }

  confirmLogout() {
    cy.get(this.logout_confirm).should("exist");
  }
}
export default Signup;
