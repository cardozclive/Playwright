Feature: Ecommerce Validations

  Scenario: Placing an order
    Given a login to Ecommerce application with "anshika@gmail.com" and "Iamking@000"
    When Add "ZARA COAT 3" to cart
    When Enter valid details and Place the order
    Then Verify order is present in the OrderHistory
