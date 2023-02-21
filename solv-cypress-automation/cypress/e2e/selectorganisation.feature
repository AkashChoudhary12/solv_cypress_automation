Feature: Select Organization

    Scenario: To check the components of Select Organization page.

        Given Open link and login
        Then Validate There should be DayNight switch icon at top right corner
        Then Validate There should be Manage user button at top right corner
        Then Validate There should be search box to search a particular organization form the list
        Then Validate list of organisation associated with that user

    Scenario: To check the components of Select Project page.

        Given Open link and login
        Then Select the organisation
        Then Validate There should be search box to search a particular project form the list
        Then Validate list of project associated with that user
        Then Validate There should be a back button tapping on which should redirect to select organization
        Then Validate Selecting a project should redirect to a new page
        Then Validate the name of organization and project should be displayed at top beside the user icon & the user should be redirected to the Dashboard