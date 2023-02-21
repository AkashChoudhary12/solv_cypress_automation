import SideBarPage_PO from "../page-objects/SideBarPage_PO";

/// <reference types="cypress" />
import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

const sB = new SideBarPage_PO();

Then("Tap on Users", function () {
  sB.usersBtn().click();
});


Then("Validate there should be three submenu Active Inactive and Project Association",function(){


sB.activeBtn().should('be.visible')
sB.inactiveBtn().should('be.visible')
sB.projectAssociationBtn().should('be.visible')



})