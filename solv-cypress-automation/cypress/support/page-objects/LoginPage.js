class LoginPage
{

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

}

export default LoginPage;








