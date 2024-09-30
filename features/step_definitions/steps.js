const { Given, When, Then } = require("@cucumber/cucumber");
const { POManager } = require('../../tests/PageObjects/POManager')
const { expect } = require('@playwright/test');
const playwright = require('@playwright/test');

Given('a login to Ecommerce application with {string} and {string}', {timeout: 200*1000}, async function (username, password) {
    
    
    const loginPage = this.poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(username, password);

  });

  When('Add {string} to cart', {timeout: 200*1000}, async function (productName) {
    const dashboardPage = this.poManager.getDashboardPage(this.page, expect);
    await dashboardPage.searchProductAddCart(productName);
    // await expect(page.locator("[routerlink*='cart']")).toHaveText(" Cart 1 ");
    await dashboardPage.navigateToCart();
    
  });

  When('Enter valid details and Place the order', {timeout: 200*1000}, async function () {
    const placeOrder = this.poManager.getPlaceOrder(this.page, expect);
    await placeOrder.AddDetailsPlaceOrder();
  });

  Then('Verify order is present in the OrderHistory', {timeout: 200*1000}, async function () {
    const order = this.poManager.getOrderPage(this.page, expect)
    await order.orderConfirmationPage();
    await order.orderHistorySearch();
  });