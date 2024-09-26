const { test, expect, request } = require('@playwright/test');

test("Security test network intercept", async ({ page }) => {
    const email = "sobo@yopmail.com";
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill("$Password123");
    await page.locator("#login").click();
    await page.waitForLoadState("networkidle");
    page.locator(".card-body").last().waitFor();
    await page.waitForLoadState('networkidle', { timeout: 60000 }); // 60 seconds
    const products = page.locator(".card-body");
    //intercepting request call
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
        route => route.continue({ url: "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=621661f884b053f6765465b6", })
    )
    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("button:has-text('View')").first().click();
    await expect(page.locator('p').last()).toHaveText("You are not authorize to view this order")



})