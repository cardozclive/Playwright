Feature: Ecommerce Validations
  @Regression
  Scenario: Placing an order
    Given a login to Ecommerce application with "anshika@gmail.com" and "Iamking@000"
    When Add "ZARA COAT 3" to cart
    When Enter valid details and Place the order
    Then Verify order is present in the OrderHistory

  # Examples:
  #   |   productName        |
  #   |   ZARA COAT 3        |
  #   |   ADIDAS ORIGINAL    |
  #   |   IPHONE 13 PRO      |

Scenario Outline: Placing an order
    Given a login to Ecommerce2 application with "<username>" and "<password>"
    Then Verify error message is displayed

    Examples:
    |  username             |  password     |
    |  anshika@gmail.com    |  Iamking@000  |
    |  hello@gmail.com      |  Iamhello@12  |