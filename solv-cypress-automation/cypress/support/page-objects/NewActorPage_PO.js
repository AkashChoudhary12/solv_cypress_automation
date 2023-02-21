class newActorPage {

    profileType() {

        return cy.get('#playerType').select('Businessman')

    }

    enterFirstName(){

        return cy.get('input[formcontrolname="fname"]')
    }

    enterLastName(){

        return cy.get('input[formcontrolname="lname"]')
    }

    enterEmailAddress(){

        return cy.get('input[formcontrolname="email"]')
    }
    
    enterPhone(){

        return cy.get('input[formcontrolname="phone"]')
    }

    resetBtn(){

        return cy.contains('Reset ')
    }

    saveBtn(){

        return cy.get('button[type="submit"]')
    }





}
export default newActorPage;