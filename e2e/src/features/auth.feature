@FE @app
Feature: Authentication Feature

Scenario: As an unauthenticated user, I can see the app nav menu
    Given I navigate to the login page
    Then I see the authentiction home page
    Then I enter my credentials
    Then I see the heroes list