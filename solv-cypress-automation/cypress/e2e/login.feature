
Feature: Login

    Background:

        Given I navigate Login Page

    Scenario: To check the login page components (TC-01)

        Then   Validate all feilds in login Page

    Scenario: To check Login functionality with valid email id and valid password  (TC-02)


        Then  Enter valid Email-id and valid Password
        When  Tap on login
        Then  Validate user should be able to login only with valid email id and valid password

    Scenario: To check Login functionality with Invalid email id and valid password  (TC-03)


        Then  Enter invalid Email-id and valid Password
        When  Tap on login
        Then  user should not be able to login & Validation message should be displayed 'Login Failed'

    Scenario: To check Login functionality with valid email id and Invalid password  (TC-04)

        Then  Enter valid Email-id and Invalid Password
        When  Tap on login
        Then  user should not be able to login & Validation message should be displayed 'Login Failed'

    Scenario: To check Login functionality with Invalid email id and Invalid password  (TC-05)

        Then  Enter Invalid Email-id and Invalid Password
        When  Tap on login
        Then  user should not be able to login & Validation message should be displayed 'Login Failed'

    Scenario: To check the Forgot Password Link  (TC-06)

        When  Tap on Forgot password link
        Then Validate User should be redirected to a new link
        Then Validate After redirected to a new link text box to enter the email id, continue button and cancel button
        Then  Tapping on cancel button which should redirect user to Login page


