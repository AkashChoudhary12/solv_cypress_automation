/// <reference types="cypress" />

import { Then } from "@badeball/cypress-cucumber-preprocessor";
import DashBoardPage_PO from "../page-objects/DashBoardPage_PO";
import valuesPage_PO from "../page-objects/valuesPage_PO";

const dP = new DashBoardPage_PO();
const vP = new valuesPage_PO();

Then("Click on Project review", function () {
  dP.Select_ProjectReview().click();
  dP.values().click();
  cy.wait(2000);
});

Then("I click on Unique Value", function () {
  vP.addUniqueValueBtn().click();
});

Then("add unique value and select a Actor", function () {
  vP.uniqueValueField().type("puzzle");
  vP.selectAnActor().select("Abbas Bhai");
  vP.saveBtn().click();
});

Then("Validate value is added or not", function () {
  cy.wait(3000);
  cy.get("#uniqueValTable tr td:nth-child(2)").each(($el, index, $list) => {
    const text = $el.text();
    if (text.includes("puzzle")) {
      cy.get("#uniqueValTable tr td:nth-child(2)")
        .eq(index)
        .then(function (value) {
          const valuename = value.text();
          expect(valuename).to.equal("puzzle");
        });
    }
  });
});

Then("search unique value", function () {
  vP.searchField().type("powerplant");
  cy.wait(2000);
  cy.get("td.text-center i:nth-child(3)").click();
  cy.wait(2000);
});

Then("delete searched value", function () {
  cy.wait(2000);
  cy.contains("Yes").click();
});

Then("validate value is deleted or not", function(){

cy.get('div.alertify-notifier.ajs-top.ajs-right');

})
