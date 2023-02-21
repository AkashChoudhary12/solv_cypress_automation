/// <reference types="cypress" />
import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

import Base_PO from "../page-objects/Base_PO";
import DashBoardPage_PO from "../page-objects/DashBoardPage_PO";
import LoginPage_PO from "../page-objects/LoginPage_PO";
import SelectOrganisationPage_PO from "../page-objects/SelectOrganisationPage_PO";
import SelectProjectPage_PO from "../page-objects/SelectProjectPage_PO";

const basePage = new Base_PO();
const lp = new LoginPage_PO();
const oP = new SelectOrganisationPage_PO();
const sP = new SelectProjectPage_PO();
const dP = new DashBoardPage_PO();

Given("Open link and login", function () {
  basePage.navigate();
  lp.enterEmailID().type(this.data.validemailID);
  lp.enterPassword().type(this.data.validpassword);
  lp.loginBtn().click();
  cy.url().should("include", "switch-organisation");
});

Then("Select the organisation", function () {
  cy.get("h5.card-title.mb-0").each(($el, index, $list) => {
    if ($el.text().includes(this.data.organisationname)) {
      cy.wrap($el).click();
    }
  });

  cy.url().should("include", "selected-projects");
});

Then(
  "Validate There should be search box to search a particular project form the list",
  function () {
    oP.searchBox().should("be.visible");
  }
);

Then("Validate list of project associated with that user", function () {
  const project_list = [
    " 3rd Cycle Interview test ",
    " Akash Constructions ",
    " Algorithm Development ",
    " Amsterdam ",
    " Blackwood Smart City ",
    " Check for actor & candidates ",
    " check for maxncp ",
    " check for player network ",
    " Check for PS alert ",
    " Check for quick scan ",
    " Check for st & et in quick scan ",
    " check for timestamp in QS ",
    " Check for unique value approve ",
    " Chessables ",
    " Component test interview ",
    " Meta ",
    " Onyx General Construction  ",
    " Preselection Test ",
    " Project - FAR ",
    " Project Image Test ",
    " Project Image test 2 ",
    " Project Setup New Question ",
    " Project Test Image Notification ",
    " Quick scan for project setup ",
    " Quick scan with new questions ",
    " Sliders ",
    " Sprint 2.1.12 ",
    " Test component ",
    " Test for 3rd cycle ",
    " Test Status for Quick Scan ",
    " USA Wildlife Construction ",
  ];
  cy.get("h5.card-title.mb-0").as("itemlist");
  cy.get("@itemlist").each((item, index, list) => {
    cy.wrap(item).should("contain.text", project_list[index]);
  });
});

Then(
  "Validate There should be a back button tapping on which should redirect to select organization",
  function () {
    oP.backBtn().should("be.visible");
    oP.backBtn().click();
    cy.url().should("include", "switch-organisation");
    oP.selectSolvBV().click();
  }
);

Then("Validate Selecting a project should redirect to a new page", function () {
  cy.get("h5.card-title.mb-0").each(($el, index, $list) => {
    if ($el.text().includes(this.data.projectname)) {
      cy.wrap($el).click();
    }
  });

  cy.url().should("include", "dashboard");
});

Then(
  "Validate the name of organization and project should be displayed at top beside the user icon & the user should be redirected to the Dashboard",
  function () {
    cy.get('a[title="Switch Project"] span[class="p-2"]').should(
      "have.text",
      this.data.projectname
    );

    cy.get('a[title="Switch Organisation"] span[class="p-2"]').should(
      "have.text",
      this.data.organisationname
    );
  }
);

Then(
  "Validate There should be DayNight switch icon at top right corner",
  function () {
    oP.dayNightSwitch().should("be.visible");
  }
);

Then(
  "Validate There should be Manage user button at top right corner",
  function () {
    oP.manageUser().should("be.visible");
  }
);

Then(
  "Validate There should be search box to search a particular organization form the list",
  function () {
    oP.searchBox().should("be.visible");
  }
);

Then("Validate list of organisation associated with that user", function () {
  const organisation_list = [
    " Sandbox Organization ",
    " Sandbox ",
    " RK Builders ",
    " New York association. ",
    " RK construction ",
    " Regression testing  ",
    " BBK Electronics  ",
    " SOLV BV ",
    " Sandbox Testing ",
  ];
  cy.get("h5.card-title.mb-0").as("itemlist");
  cy.get("@itemlist").each((item, index, list) => {
    cy.wrap(item).should("contain.text", organisation_list[index]);
  });
});

Then("Select organization and project", function () {
  cy.get("h5.card-title.mb-0").each(($el, index, $list) => {
    if ($el.text().includes(this.data.organisationname)) {
      cy.wrap($el).click();
    }
  });

  cy.url().should("include", "selected-projects");

  cy.get("h5.card-title.mb-0").each(($el, index, $list) => {
    if ($el.text().includes(this.data.projectname)) {
      cy.wrap($el).click();
    }
  });

  cy.url().should("include", "dashboard");
});

Then("Tap to expand the side menu", function () {
  dP.sidebarBtn().click({ force: true });
});

Then("validate actors profile type in dashboared page", function () {
  dP.searchFeild().scrollIntoView();

  cy.get("#report-template-table tr td:nth-child(1)").each(
    ($el, index, $list) => {
      const text = $el.text();
      if (text.includes("Abbas Bhai")) {
        cy.get("#report-template-table tr td:nth-child(1)")
          .eq(index)
          .next()
          .next()
          .then(function (name) {
            const profileType = name.text();
            expect(profileType).to.equal("Project Initiator");
          });
      }
    }
  );
});

Then(
  "Validate number of options to select from depending on the type of user logged in",
  function () {
    const sidebar_list = [
      "Dashboard ",
      "Interview ",
      "Project Review ",
      " Dynamic Analysis ",
      "Forecast ",
      "Reporting ",
      "History ",
      "Users ",
      "Element ",
      "About Solv ",
    ];
    cy.get("div.sidebarText.text-truncate").as("itemlist");
    cy.get("@itemlist").each((item, index, list) => {
      cy.wrap(item).should("contain.text", sidebar_list[index]);
    });
  }
);
