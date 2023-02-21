/// <reference types="cypress" />
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";


import Base_PO from "../page-objects/Base_PO";
import ForgotPasswordPage_PO from "../page-objects/ForgotPasswordPage_PO";
import LoginPage_PO from "../page-objects/LoginPage_PO";


const basePage = new Base_PO();
const lp = new LoginPage_PO();
const fP = new ForgotPasswordPage_PO();


Given("I navigate Login Page", () => {
  basePage.navigate();
  basePage.getPageTitle().should("include", "SOLV");
});

Then("Enter valid Email-id and valid Password", function () {
  lp.enterEmailID().type(this.data.validemailID);
  lp.enterPassword().type(this.data.validpassword);
});

Then("Enter Invalid Email-id and Invalid Password", function () {
  lp.enterEmailID().type(this.data.invalidemailID);
  lp.enterPassword().type(this.data.invalidpassword);
});




Then("Enter valid Email-id and Invalid Password", function () {
  lp.enterEmailID().type(this.data.validemailID);
  lp.enterPassword().type(this.data.invalidpassword);
});


Then("Enter invalid Email-id and valid Password", function () {
  lp.enterEmailID().type(this.data.invalidemailID);
  lp.enterPassword().type(this.data.validpassword);
});



Then("Tap on login", function () {
  lp.loginBtn().click()

});


Then("Validate user should be able to login only with valid email id and valid password", function () {
    
    lp.searchFeild().should('be.visible')

  });


  
Then("user should not be able to login & Validation message should be displayed 'Login Failed'", function () {
    
    lp.loginFailedError().should('be.visible')

});







Then("Validate all feilds in login Page", function () {
  lp.forgotPassword().should("be.visible");
  lp.enterEmailID().should("be.visible");
  lp.enterPassword().should("be.visible");
  lp.loginBtn().should("be.visible");
});

Then("I fill the invalid Email-id and invalid Password", function () {
  lp.enterEmailID().type("akash@gmail");
  lp.enterPassword().type("bbjbbjbaj");
});

When("Click on Login Button", function () {
  lp.loginBtn().click();
});

Then("Verify user is not able to  logIn to solv", () => {
  oP.SelectOrganisationPage().should("have.text", " Select Organization ");
});


When("Tap on Forgot password link", () => {
  
  lp.forgotPassword().click()

});


Then("Validate User should be redirected to a new link", () => {
  
  cy.url().should('include','forgotpassword')

});


Then("Validate After redirected to a new link text box to enter the email id, continue button and cancel button", () => {
  
  fP.emailIDField().should('be.visible')
  fP.continueBtn().should('be.visible')
  fP.cancelBtn().should('be.visible')

});


Then("Tapping on cancel button which should redirect user to Login page", () => {
  
  fP.cancelBtn().click();
  cy.url().should('include','login')

});

