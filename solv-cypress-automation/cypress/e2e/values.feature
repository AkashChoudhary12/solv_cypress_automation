Feature: values

    Scenario: Verify add unique value funtionality
        When Open link and login
        Then Select organization and project
        Then Tap to expand the side menu
        Then Click on Project review
        Then I click on Unique Value
        Then add unique value and select a Actor
        Then Validate value is added or not


    Scenario: Verify delete unique value funtionality
        When Open link and login
        Then Select organization and project
        Then Tap to expand the side menu
        Then Click on Project review
        Then search unique value
        Then delete searched value
        Then validate value is deleted or not