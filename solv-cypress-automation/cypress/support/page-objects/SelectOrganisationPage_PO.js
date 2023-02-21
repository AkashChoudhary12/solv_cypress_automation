class SelectOrganisationPage_PO {
  Select_Solv() {
    return cy.contains(" Belgium ");
  }

  SelectOrganisationPage() {
    return cy.get("h4.topheading.p-0");
  }

  manageUser() {
    return cy.contains(" Manager User");
  }

  searchBox() {
    return cy.get('input[type="text"]');
  }

  dayNightSwitch() {
    return cy.get("div.toggle-slot");
  }


  selectSolvBV(){

    return cy.contains(' SOLV BV ');

  }

  backBtn(){

    return cy.get('i[title="Back to Organisation"]')
  }



}

export default SelectOrganisationPage_PO;
