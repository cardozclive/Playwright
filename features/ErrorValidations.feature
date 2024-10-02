Feature: Ecommerce Validations
  @Validation
  Scenario Outline: Placing an order
    Given a login to Ecommerce2 application with "<username>" and "<password>"
    Then Verify error message is displayed

    Examples:
    |  username             |  password     |
    |  anshika@gmail.com    |  Iamking@000  |
    |  hello@gmail.com      |  Iamhello@12  |
