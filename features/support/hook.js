const playwright = require('@playwright/test');
const { POManager } = require('../../tests/PageObjects/POManager');
const { Before, After } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Before(async function () {
    const browser = await playwright.chromium.launch({ headless: false });
    const context = await browser.newContext();
    this.page = await context.newPage();
    // this.poManager = new POManager(this.page, expect, username)
    this.poManager = new POManager(this.page, expect)
});

After(function () {
    // Assuming this.driver is a selenium webdriver
    console.log('I am the last one to execute');
  });