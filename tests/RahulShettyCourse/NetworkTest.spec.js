const { test, expect, request } = require('@playwright/test');
const { APiUtils } = require('./Utils/APiUtils');

const loginPayload = { userEmail: "sobo@yopmail.com", userPassword: "$Password123" };
const OrderPayload = { orders: [{ country: "Cuba", productOrderedId: "6581cade9fd99c85e8ee7ff5" }] };
const fakePayLoadOrder = { data: [], message: "No Orders" };
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

    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
        async route => {
            //intercepting the response - API response->{ playwright fakeresponse }->browser->rendered by the browser
            const response = await page.request.fetch(route.request());
            let body = JSON.stringify(fakePayLoadOrder);
            route.fulfill(
                {
                    response,
                    body,
                })
        })

    //click on Order button
    await page.locator("button[routerlink*='myorders']").click();
    // await page.pause();
    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*")
    console.log(await page.locator('.mt-4.ng-star-inserted').textContent());
    // await expect( page.locator('.mt-4.ng-star-inserted')).toHaveText()
})