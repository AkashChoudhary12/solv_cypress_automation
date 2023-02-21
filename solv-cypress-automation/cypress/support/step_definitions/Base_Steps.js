/// <reference types="cypress" />

import { Before, After } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
  cy.log("Executes before each Scenario/Test");
});

// Before({ tags: "@smoke and @bar" }, () => {
//   cy.log("Executing  smoke Pack");
// });

After(() => {
  cy.log("Executes after each scenario/Test");
});

// When("I wait for {int} seconds", function (seconds){

//   cy.wait(seconds * 1000);

// })