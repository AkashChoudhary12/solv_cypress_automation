Feature: Actors&Candidate

    Scenario: Verify Search Actor Functinality in SOLV
        When Open link and login
        Then Select organization and project
        Then Tap to expand the side menu
        When Goto Project Review
        Then Select Actors and Candidate
        Then Validate searched actor

    Scenario: Verify reset functionality while adding an actors
        When  Open link and login
        Then Select organization and project
        Then Tap to expand the side menu
        When Goto Project Review
        Then Select Actors and Candidate
        Then Add New Actors
        Then fill the actors form and click on Reset Button

    Scenario: Verify to Adding Actor
        When Open link and login
        Then Select organization and project
        Then Tap to expand the side menu
        When Goto Project Review
        Then Select Actors and Candidate
        Then Add New Actors
        Then fill the actors form and click on Save Button

    Scenario: Verify to Add new Candidate
        When Open link and login
        Then Select organization and project
        Then Tap to expand the side menu
        When Goto Project Review
        Then Select Actors and Candidate
        Then Click on Add New Candidate
        Then fill the actors form and click on Save Button




