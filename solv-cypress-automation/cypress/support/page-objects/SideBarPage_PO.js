class SideBarPage_PO {
  usersBtn() {
    return cy.get('button[data-target="#panel-User"]');
  }

  activeBtn() {
    return cy.contains("Active");
  }

  inactiveBtn() {
    return cy.contains("Inactive");
  }

  projectAssociationBtn() {
    return cy.contains("Project Association");
  }
}
export default SideBarPage_PO;
