/// <reference types="cypress" />
import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import ActorsAndCandidatesPage_PO from "../page-objects/ActorsAndCandidatesPage_PO";

import DashboaredPage_PO from "../page-objects/DashBoardPage_PO";
import NewActorPage_PO from "../page-objects/NewActorPage_PO";

const dP = new DashboaredPage_PO();
const aC = new ActorsAndCandidatesPage_PO();
const nA = new NewActorPage_PO();

When("Goto Project Review", () => {
  dP.Select_ProjectReview().click({ force: true });
  dP.Select_ProjectReview().click({ force: true });
});

Then("Select Actors and Candidate", function () {
  dP.Select_ActorsAndCandidates().click();
});

Then("Click on Add New Candidate", function () {
  aC.addNewCandidate().scrollIntoView();
  aC.addNewCandidate().click();
});

Then("Add New Actors", function () {
  aC.AddActor().click();
  nA.profileType();
});

Then("fill the actors form and click on Save Button", function () {
  cy.fixture("actors").then((data) => {
    data.forEach(function (userdata) {
      nA.enterFirstName().type(userdata.firstName);
      nA.enterLastName().type(userdata.lastName);
      nA.enterEmailAddress().type(userdata.emailAddress);
      nA.enterPhone().type(userdata.phone);
      //     nA.saveBtn().click()
    });
  });
});

Then("fill the actors form and click on Reset Button", function () {
  cy.fixture("actors").then((data) => {
    data.forEach(function (userdata) {
      nA.enterFirstName().type(userdata.firstName);
      nA.enterLastName().type(userdata.lastName);
      nA.enterEmailAddress().type(userdata.emailAddress);
      nA.enterPhone().type(userdata.phone);
      nA.resetBtn().click();
      nA.enterFirstName().should("not.have.text");
    });
  });
});

Then("Validate searched actor", () => {
  const name = "akash mishra";
  cy.wait(2000);
  aC.searchOption().type(name);
  cy.get("tbody tr").find("td").eq(0).should("contain", name);
});
