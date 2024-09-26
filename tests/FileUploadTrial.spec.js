const {test} = require ('@playwright/test');

test('@Trial Upload PDF', async ({browser})=>
{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.ilovepdf.com/");
    await page.locator('[title="Compress PDF"]').click();
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'Select PDF files' }).click();
    // await page.pause();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:\\Users\\Guest1\\Downloads\\Test Automation Interview Preparation - 2023.pdf')
    await page.waitForLoadState('networkidle')
})