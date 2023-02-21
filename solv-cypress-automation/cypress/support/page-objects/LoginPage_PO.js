/// <reference types="cypress" />

import Base_PO from "./Base_PO"

class LoginPage_PO extends Base_PO  {

        navigateToLoginpage(){

            super.navigate()

        }


 enterEmailID()
{
    return cy.get('input[placeholder="Enter email-id"]')
}

enterPassword()
{
    return cy.get('input[placeholder="Enter password"]')
}

loginBtn()
{
    return cy.get('.btn.text-white.btn-secondary.w-100')
}

forgotPassword()
{

    return cy.get('#txtfgtpswd')
}

switchOrgURL(){

    return cy.get('https://solv-dev.kizora.in/switch-organisation')
}

searchFeild(){

    return cy.get('input[type="text"]')
}


loginFailedError(){

    return cy.get('div[role="alert"]')
}





}


export default LoginPage_PO;