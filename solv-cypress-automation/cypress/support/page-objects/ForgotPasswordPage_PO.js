class ForgotPasswordPage_PO {
  emailIDField() {
    return cy.get('input[type="text"]');
  }

  continueBtn() {
    return cy.get('button[type="submit"]');
  }

  cancelBtn() {
    return cy.get('button[type="button"]');
  }
}
export default ForgotPasswordPage_PO;
