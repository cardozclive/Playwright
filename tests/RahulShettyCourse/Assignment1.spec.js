const {test, expect} = require("@playwright/test")

test("Practice1", async ({page})=>
{

await page.goto("https://rahulshettyacademy.com/client/");
// await page.locator(".login-wrapper-footer-text").click();
const passWord1 = page.locator("#userPassword");
// const passWord2 = page.locator("#confirmPassword");
const email = page.locator("#userEmail");
const myEmail ='sobo1@yopmail.com';
// const myPassword ='Password';
const cardTitles = page.locator(".card-body b");
const correctPassword = '$Password123';

// await page.locator("#firstName").fill("Pratik");
// await page.locator("[type='lastName']").fill("hagela");
// await email.fill(myEmail);
// await page.locator("#userMobile").fill("9879542213");
// await page.selectOption("[formcontrolname='occupation']",{label: "Student"});
// await page.locator("[value='Male']").click();
// await passWord1.fill(myPassword);
// await passWord2.fill(myPassword);
// await page.locator("[type='checkbox']").click();
// await page.locator("[value='Register']").click();
// console.log(await page.locator("[aria-label*='Please']").textContent());
// await passWord1.fill("");
// await passWord1.fill(correctPassword);
// await passWord2.fill("");
// await passWord2.fill(correctPassword);
// await page.locator("[value='Register']").click();
// console.log(await page.locator(".headcolor").textContent());
// await page.locator(".btn.btn-primary").click();
await email.fill(myEmail);
await passWord1.fill(correctPassword);
await page.locator("#login").click()
// console.log(await cardTitles.first().textContent());
// await page.waitForLoadState("networkidle")
await cardTitles.first().waitFor();
const allTitles = await cardTitles.allTextContents();
console.log(allTitles);
console.log(await cardTitles.first().textContent());
const allPrices = await page.locator(".card-body div").allTextContents();
console.log(allPrices);
console.log(await page.locator(".card-body div").nth(1).textContent());

});