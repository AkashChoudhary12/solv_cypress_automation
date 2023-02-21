class ActorsAndCandidatesPage {

    AddActor() {

        return cy.contains('Add Actor ')

    }

    Actor1(){

        return cy.contains('rahul wahane')
    }

    searchOption(){

        return cy.get("input[aria-controls='actorTable']")
    }


    addNewCandidate(){

            return cy.get("button[class='btn btn-primary text-white ms-auto float-right btn-sm']")
    }


}
export default ActorsAndCandidatesPage;