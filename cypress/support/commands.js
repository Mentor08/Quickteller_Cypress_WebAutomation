// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
//Cypress.Commands.add("functionName",(para) => {})
Cypress.Commands.add(
  "loginWithPhoneNumber",
  (countryName, phonenumber, password) => {
    // click on phone number sign link
    cy.get(".social__phoneNumber > span").click();
    //click on the country code field
    cy.get(".text").click();
    //selecting your phone number country code
    cy.get(
      'div[class="menu transition visible"] > div[class="scrolling menu transition"] > div[class="item"]'
    )
      .contains(countryName)
      .click({ force: true })
      .should("have.text", countryName);
    // enter your phone number
    cy.get("input[placeholder='08012345678']")
      .should("exist")
      .type(phonenumber)
      .should("have.value", phonenumber);
    // enter your password
    cy.get('.inside__input[name="password"]').type(password);
    cy.screenshot();
  }
);

Cypress.Commands.add("selectRememberMe", () => {
  // click on remember me checkbox
  cy.get("div.other__login__details > .login__remember__me")
    .should("not.be.checked")
    .check()
    .should("be.checked");
  cy.screenshot();
});

Cypress.Commands.add("clickOnSubmit", () => {
  // click on submit button
  cy.screenshot();
  cy.get(".button > p").click();
});

Cypress.Commands.add("clickOnGetStarted", () => {
  // click on get started as a new user
  cy.screenshot();
  cy.get("div[class='get__started'] div div button[type='button'] p").click();
});

Cypress.Commands.add(
  "completeAcctSetup",
  (firstname, lastname, gender, dateofbirth) => {
    // first user login first name
    cy.get("input[placeholder='Enter your first name']")
      .type(firstname)
      .should("have.value", firstname);
    // first user login last name
    cy.get("input[placeholder='Enter your last name']")
      .type(lastname)
      .should("have.value", lastname);
    // first user login gender
    cy.get(".select-gender").select(gender).contains(gender);
    // first user login date-of-birth
    cy.get("input[placeholder='DD/MM/YYYY']").click();
    cy.get("input[placeholder='DD/MM/YYYY']").type(dateofbirth);
    cy.screenshot();
    // click on next button
    cy.get("button[type='submit'] p").should("exist").click();
  }
);

Cypress.Commands.add("setUserPin", (pin) => {
  //new user login pin
  cy.get(
    "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > section:nth-child(1) > section:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)"
  ).type(pin);
  //new user login confirm pin
  cy.get(
    ":nth-child(3) > .set__transaction__pin__group > :nth-child(1) > .otp-wrapper > .otp-group > #\\30"
  ).type(pin);
  // click on set pin button
  cy.get(
    "div[class='set__transaction__pin__wrapper'] div button[type='button'] p"
  ).click();
  cy.screenshot();
});

Cypress.Commands.add("personalizeAcct", () => {
  // click on I will personalize my acct later
  cy.get(
    "div[class='ui page modals dimmer transition visible active'] button:nth-child(1) p:nth-child(1)"
  ).click();
  cy.get(".preferences__wrapper > div").each(($el, index, $list) => {
    cy.wrap($el).click();
  });
  cy.get(
    'button[class="ui button contained__button undefined"]:nth-child(1)'
  ).click();
});

Cypress.Commands.add("verifySuccessfulLogin", (accountname) => {
  cy.get(".user_name").should("have.text", accountname);
});

Cypress.Commands.add("logout", () => {
  //click on acct dropdown option
  cy.get(".user__dropdown > img").click();
  //click on logout button
  cy.get("div[class='nav__bar__logout'] p")
    .should("have.text", "Logout")
    .click();
  cy.get("button[type='submit'] p").should("exist");
  cy.screenshot();
});

Cypress.Commands.add("confirmLogout", () => {
  cy.get("button[type='submit'] p").should("exist");
  cy.screenshot();
});

Cypress.Commands.add("verifyInvalidDetails", (expected) => {
  cy.get("div[class='toast-enter'] h5div[class='toast-enter'] p").should(
    "have.text",
    expected
  );
});

Cypress.Commands.add("loginWithEmail", (email, password) => {
  // enter your email
  cy.get('.inside__input[name="email"]').type(email);
  // enter your password
  cy.get('.inside__input[name="password"]').type(password);
  // click on remember me checkbox
  /*cy.get("div.other__login__details > .login__remember__me")
    .should("not.be.checked")
    .check()
    .should("be.checked");*/
  cy.screenshot();
  // click on submit button
  cy.get('button[type="submit"]').click();
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
///<reference types="cypress" />;
