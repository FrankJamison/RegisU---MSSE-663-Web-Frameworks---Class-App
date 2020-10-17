@FE @heroes

Feature: Heroes

  Scenario: As an authenticated user, I can list of heroes on the heroes page
    Given Heroes: I navigate to the auth page
    Then Heroes: I see the authentiction home page
    Then Heroes: I enter my credentials
    Then Heroes: I see the heroes list
    And Heroes: I click on the heroes tab
    Then Heroes: I see the heroes list again
    Then Hero: Click on hero
    Then Hero: See hero


  # Scenario: As an authenticated user, I can select a single hero
  #   Given I navigate to the login page
  #   Then I see the authentiction home page
  #   Then I enter my credentials
  #   And I navigate to the heroes page
  #   Then I see the heroes list
  #   When I select a single hero
  #   Then I see that heroes details