/// <reference types="cypress" />

import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import DashBoardPage_PO from "../page-objects/DashBoardPage_PO";


const dP = new DashBoardPage_PO();


When("I click on theme change button", function () {
  dP.themeChangeBtn().click().should("have.css","background-color","rgb(55, 65, 81)");
  
  // cy.get("#report-template-table_next").should("have.css","background-color","rgba(39, 39, 39, 0.77)");
});



Then("click on add images", function (){

dP.images().scrollIntoView();
cy.wait(2000);
dP.addImagesBtn().click();
cy.wait(2000);
dP.chooseFileBtn().click().attachFile("imgone.png");
// dP.saveBtn().click();

})