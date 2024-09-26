const {test, expect} = require("@playwright/test")

test("Calender Validation", async({browser})=>{

const monthNumber = "6";
const date = "15";
const year = "2028";
const expectedList =[monthNumber, date, year]

const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/seleniumPractise/");
const[newPage] = await Promise.all(
[
context.waitForEvent('page'),
await page.getByRole("link", {name: "Top Deals"}).click()
]  )
await newPage.locator(".react-date-picker__calendar-button__icon").click();
await newPage.locator(".react-calendar__navigation__label").click();
await newPage.locator(".react-calendar__navigation__label").click();
// await newPage.locator(".react-calendar__navigation__next-button").click();
// await newPage.getByText("2031 – 2040").waitFor();
await newPage.getByText(year).click();
await newPage.locator(".react-calendar__year-view__months__month").nth(Number(monthNumber)-1).click();
await newPage.locator("//td[text()='6']").first().click();
const inputs = newPage.locator(".react-date-picker__inputGroup input");
// const inputCounts = await inputs.count();

//rahul sir's below code is wrong
// for (let i = 0; i<inputs.length; i++)
//     {
//         const value = inputs[i].getAttribute("value");
//         expect(value).toEqual(expectedList[i]);
// }


//Solution provided by one of the student
await newPage.waitForLoadState("load");
for(let i=0; i < inputs.count(); i++)
{
    const value = await inputs.nth[i].getAttribute("value");
    expect(value).toEqual(expectedList[i]);

}
// await newPage.pause();

})