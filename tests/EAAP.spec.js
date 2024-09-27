const { test, expect } = require('@playwright/test')

test('EA App testing', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://eaapp.somee.com/');
    // await page.waitForEvent("network")
    await page.locator('#loginLink').click();
    await page.locator('#UserName').fill('admin');
    await page.locator('[type="password"]').fill('password');
    await page.getByLabel('Remember me').click();
    await page.getByRole('button',{name : 'log in'}).click();

}
)