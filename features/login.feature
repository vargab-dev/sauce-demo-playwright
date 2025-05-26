Feature: Login functionality

  Scenario: Successful login
    Given I navigate to the login page
    When I login with username "standard_user" and password "secret_sauce"
    Then I should be redirected to the inventory page

  Scenario: Unsuccessful login
    Given I navigate to the login page
    When I login with username "invalid_user" and password "wrong_pass"
    Then I should see an error message