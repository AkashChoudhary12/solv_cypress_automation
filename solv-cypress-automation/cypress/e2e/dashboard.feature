Feature: Dashboard

    Scenario: To check the components of side menu.

        When Open link and login
        Then Select organization and project
        Then Tap to expand the side menu
        Then Validate number of options to select from depending on the type of user logged in


    Scenario: To check theme change functionality

        When Open link and login
        Then Select organization and project
        When I click on theme change button


    @focus
    Scenario: Verify to Actor is added in Dashboared page
        When Open link and login
        Then Select organization and project
        Then Tap to expand the side menu
        Then validate actors profile type in dashboared page



# Scenario: Verify add image functionality
#     When Open link and login
#     Then Select organization and project
#     Then Tap to expand the side menu
#     Then click on add images



