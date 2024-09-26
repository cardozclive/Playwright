const { test, expect } = require("@playwright/test")

// test.describe.configure({mode: "serial"});
test("@Web Popup Validation", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    // await page.goto("https://www.google.com");
    // await page.goBack();
    // await page.goForward();
    // await page.goBack();
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("[value='Hide']").click();
    await expect(page.locator(".inputs.displayed-class")).toBeHidden();
    // await page.pause();
    await page.locator("#alertbtn").click();
    page.on("dialog", dialog => dialog.accept());
    // await page.locator("#confirmbtn").click();
    // page.on("dialog", dialog => dialog.dismiss());
    await page.keyboard.press('PageDown');
    await page.keyboard.press('PageDown', { delay: 100 });
    await page.locator("#mousehover").hover();
    await page.getByText("Reload").click({delay: 1000});
    await page.waitForLoadState("load");

    await page.keyboard.press('PageDown');
    await page.keyboard.press('PageDown');

    // await page.locator("#courses-iframe").hover();
    // const framesPage = page.locator("#courses-iframe")
    // await framesPage.locator(".btn.btn-theme.btn-sm.btn-min-block").click();

    const framePage = page.frameLocator('#courses-iframe');
    await page.locator('#courses-iframe').scrollIntoViewIfNeeded();
    await framePage.locator('li a[href*="lifetime-access"]:visible').click();
    const text = await framePage.locator(".text h2").textContent();
    console.log(text.split(" ")[1]);
    // await page.pause();
})

test('Screenshot & Visual Comparison', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator('#courses-iframe').screenshot({ path: './Screenshot/iFrame.jpg', type: 'jpeg' })
    await page.locator("[value='Hide']").click();
    await page.screenshot({ path: './Screenshot/Screenshot.png', fullPage: true });
    await expect(page.locator(".inputs.displayed-class")).toBeHidden();

})

test('Visual ', async ({page}) => {

    await page.goto('https://flightaware.com//');
    await page.waitForLoadState('networkidle');
    // const shot = await page.screenshot({
    //     // animations: 'disabled',
    //     // mask: [page.locator('.pull-left.logo-outer')],
    // })
    expect(await page.screenshot()).toMatchSnapshot('Screenshot.png')
})