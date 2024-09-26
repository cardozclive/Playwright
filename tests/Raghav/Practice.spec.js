const {test, expect} = require("@playwright/test");


test("Practice1", async({browser})=> {
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.locator("p.text-white").textContent());
const sentence = await page.locator("p.text-white").textContent();
// (username is rahulshettyacademy and Password is learning)
const halfSentence = sentence.split(" and")[0];
// (username is rahulshettyacademy
const userName = halfSentence.split("is ")[1];
console.log(userName);
//rahulshettyacademy
const halfSentence1 = sentence.split("and ")[1];
//Password is learning)
const password = halfSentence1.split("is ")[1].slice(0, -1);
//learning
console.log(password)
const productList = page.locator(".card-body");
const product = "Nokia Edge"
await page.locator("#username").fill(userName);
await page.locator("#password").fill(password);
await page.locator(".checkmark").last().click();
await page.locator("#okayBtn").click();
console.log(await page.locator(".checkmark").last().isChecked());
await expect(page.locator(".checkmark").last()).toBeChecked();
await page.selectOption("[data-style='btn-info']",{label: "Consultant"});
await page.selectOption("[data-style='btn-info']",{index: 1});
await page.selectOption("[data-style='btn-info']",'Student');
const dropDown = page.locator("[data-style='btn-info']");
dropDown.selectOption("consult");
await page.locator("#terms").click();
const documentLink = await page.locator("[target='_blank']");
await expect(documentLink).toHaveAttribute("class", "blinkingText");
const [newPage] = await Promise.all ([
context.waitForEvent("page"),
documentLink.click(),
]);
await newPage.waitForLoadState();   
await page.bringToFront();
await page.locator("#signInBtn").click();
const title = await page.locator(".card-body a").allTextContents();
console.log(title);
await page.waitForTimeout(3000);
const count = productList.count();
for(let i=0; i<count; ++i)
{
if (await productList.nth(i).locator("a").textContent() === product)
{
    await productList.nth(i).locator(".btn.btn-info").click();
    break;
}
}
await page.pause();


});