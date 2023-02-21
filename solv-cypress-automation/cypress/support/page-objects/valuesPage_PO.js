class valuesPage_PO {
  addUniqueValueBtn() {
    return cy.get(".fas.fa-plus-circle.pe-2");
  }

  uniqueValueField() {
    return cy.get('input[type="text"]');
  }

  selectAnActor() {
    return cy.get('select.form-select');
  }

  saveBtn(){

    return cy.get('.fas.fa-save.pe-2');

  }

  searchField(){

    return cy.get('input[type="search"]')

  }



}
export default valuesPage_PO;
