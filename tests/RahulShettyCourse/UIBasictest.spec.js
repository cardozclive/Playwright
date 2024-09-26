const { test, expect } = require('@playwright/test');
const { promises } = require('dns');



test('@Web Browser Context Playwight Test', async ({ browser }) => {

  const context = await browser.newContext();
  const page = await context.newPage();
  const userName = page.locator("#username");
  const signIn = page.locator("#signInBtn");
  const cardTitles = page.locator(".card-body a");
  page.on('request', request=> console.log(request.url()));
  page.on('response', response => console.log(response.url(), response.status()));
  const products = page.locator("card-title");
  const productName = 'Nokia Edge';
  // page.route("**/*.{jpg,jpeg,png,gif}", route=> route.abort());
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log(await page.title());
  await userName.fill("rahulshetty");
  await page.locator("[type='password']").fill("learning");
  await page.locator("#terms").click();
  await signIn.click();
  console.log("Actual result:", await page.locator("[style*='block']").textContent());
  // await page.pause();
  // page.locator("[style*='block']").waitFor();
  await expect(page.locator("[style*='block']")).toContainText("Incorrect");
  await page.pause();
  await userName.fill("");
  await userName.fill("rahulshettyacademy");
  await signIn.click();
  console.log("Name of the Device: ", await cardTitles.first().textContent());
  console.log("Name of the Device: ", await cardTitles.nth(1).textContent());
  const allTitles = await cardTitles.allTextContents();
  console.log(allTitles);
  const count = products.count();

  for (let i = 0; i < count; ++i) {

    if (await products.nth(i).locator("b").textContent() === productName()) {
      //add to cart
      await products.nth(i).locator("text=Add ").click();
      break;
    }
  }
});


test('@Web UI controls', async ({ page }) => {
  page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  //   const userName = page.locator("#username");
  //   const signIn = page.locator("#signInBtn");      
  //   await page.locator("[type='password']").fill("learning"); 
  const documentRequest = page.locator("[href*='documents-request']");
  const dropdown = page.locator("select.form-control");
  dropdown.selectOption("teach");
  //   await page.pause();
  await page.locator(".checkmark").last().click();
  //   await page.pause();
  await page.locator("#okayBtn").click();
  console.log(await page.locator(".checkmark").last().isChecked());
  await expect(page.locator(".checkmark").last()).toBeChecked();
  await page.locator("#terms").click();
  await expect(page.locator("#terms")).toBeChecked();
  await page.locator("#terms").uncheck();
  expect(await page.locator("#terms").isChecked()).toBeFalsy();
  await expect(documentRequest).toHaveAttribute("class", "blinkingText");

});

test("Child Windows Handling", async ({ browser }) => {

  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const documentRequest = page.locator("[href*='documents-request']");
  const [newPage] = await Promise.all(
    [
      context.waitForEvent('page'),//listen to any new page 
      documentRequest.click(),
    ])

  const text = await newPage.locator(".red").textContent();
  console.log(text);//Please email us at mentor@rahulshettyacademy.com with below template to receive response 
  const arrayText = text.split("@");
  const domain = arrayText[1].split(" ")[0];
  console.log(domain);
  await page.locator("#username").fill(domain);
  console.log(await page.locator("#username").textContent());



})