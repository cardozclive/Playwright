const { test, expect, request } = require("@playwright/test");

const loginPayload = { userEmail: "sobo@yopmail.com", userPassword: "$Password123" };
let token;

test.beforeAll(async () => {

    const apiContext = await request.newContext();
    const loginReponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data: loginPayload,
        })
    expect(loginReponse.ok).toBeTruthy();
    const loginReponseJson = await loginReponse.json();
    token = loginReponseJson.token;




})

test("Nopcommerce Login Demo", async ({ browser }) => {

    

    const context = await browser.newContext();
    const page = await context.newPage();
    page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, token);
    await page.goto("https://admin-demo.nopcommerce.com/login");
    await page.pause();
    await page.locator('[class="cb-lb"] [type="checkbox"]').click();

})

//Verify if order created is showing in the history page