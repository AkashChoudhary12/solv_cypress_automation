/// <reference types="cypress" />

class Base_PO {
  // baseUrl="https://solv-dev.kizora.in/login";

  navigate() {
    cy.fixture("config.json").then((data) => {
      cy.visit(data.baseUrl);
    });
  }

  getPageTitle() {

    return cy.title();

  }




}
export default Base_PO;
