const { test, expect, request } = require ('@playwright/test');
const { APiUtils } = require ('./Utils/APiUtils');

const loginPayload = { userEmail: "sobo@yopmail.com", userPassword: "$Password123" };
const OrderPayload = { orders: [{ country: "Cuba", productOrderedId: "6581cade9fd99c85e8ee7ff5" }] };
let response;

test.beforeAll(async () => {
    // loginApi
    const apiContext = await request.newContext();
    const apiutils = new APiUtils(apiContext, loginPayload);
    response = await apiutils.createOrder(OrderPayload);

});

test("Client app login", async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    page.addInitScript(value => {

        window.localStorage.setItem('token', value);
    }, response.token);

    await page.goto("https://rahulshettyacademy.com/client/");
    //click on Order button
    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();
    const allOrders = page.locator("tbody tr");
    const orderHistory = await allOrders.count();
    // await page.pause();
    for (let i = 0; i < orderHistory; i++) {
        const OrderIDMatch = await allOrders.nth(i).locator("[scope='row']").textContent();

        if (response.orderID.includes(OrderIDMatch)) {
            await allOrders.nth(i).locator("text=View").click();
            break;
        }
    }
    const orderIdDetails = await page.locator(".col-text.-main").textContent();
    console.log(orderIdDetails);
    expect(response.orderID.includes(orderIdDetails)).toBeTruthy();
    await context.close();
})