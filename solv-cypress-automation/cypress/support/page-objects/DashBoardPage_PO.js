class DashBoardPage_PO {
  Select_ProjectReview() {
    return cy.get(".fa-user-tag");
  }

  Select_ActorsAndCandidates() {
    return cy.get('[href="/project-review/actors-candidates"]');
  }

  sidebarBtn() {
    return cy.get(".fa.fa-bars.sidebaricon.pb-4.pe-4.pt-2.text-end.w-100");
  }

  themeChangeBtn() {
    return cy.get(".toggle-slot");
  }

  searchFeild() {
    return cy.get("input[type='search']");
  }

  addImagesBtn(){

    return cy.get('.btn > div > .fas');

  }

  chooseFileBtn(){

      return cy.get('.custom-dropzone');
  }

  saveBtn(){

      return cy.get(".btn.btn-success.text-white.float-right.btn-sm.me-3.ng-star-inserted")
  }

  images(){

    return cy.contains('Images')
  }

  values(){

    return cy.contains('Values')

  }


}
export default DashBoardPage_PO;
