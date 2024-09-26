const {test, expect} = require("@playwright/test")

let context;
let page;
test.beforeAll(async({browser})=>{
context = await browser.newContext();
// await context.tracing.start({

//     snapshots: true,
//     screenshots: true,
// });
page = await context.newPage();
})

test.afterAll(async()=>{
    // await context.tracing.stop({path: 'test-trace.zip'});
})

test("GetBy", async({})=>
    {
// const context = await browser.newContext();
// const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/angularpractice/");
await page.getByLabel("Check me out if you Love IceCreams!").click();
await page.getByLabel("Employed").check();
await page.getByLabel("Gender").selectOption("Female");
await page.getByPlaceholder("Password").fill("abc123");

//you can use both below methods
await page.getByRole("button", {name: 'Submit'}).click();
// await page.getByText("Submit").click();
await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
const text = await page.getByText("Success! The Form has been submitted successfully!.").textContent();
console.log(text);
await page.getByRole("link",{name: "Shop"}).click();
await page.locator("app-card").filter({hasText: "Blackberry"}).getByRole("button").click();


}


)