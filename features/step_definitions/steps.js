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

  Given('a login to Ecommerce2 application with {string} and {string}', async function (username, password) {
    // Write code here that turns the phrase above into concrete actions
    const userName = this.page.locator("#username");
    const signIn = this.page.locator("#signInBtn");
    await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await this.page.title());
    await userName.fill(username);
    await this.page.locator("[type='password']").fill(password);
    await this.page.locator("#terms").click();
    await signIn.click();
  });

  Then('Verify error message is displayed', async function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("Actual result:", await this.page.locator("[style*='block']").textContent());
    await expect(this.page.locator("[style*='block']")).toContainText("Incorrect");
  });

 
