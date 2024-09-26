import test, { page, expect } from '@playwright/test';
import exp from 'constants';
import { title } from 'process';

test("Assertions Demo", async ({ page }) => {
    await page.goto("https://kitchen.applitools.com/")
    // await page.pause();
    await expect(page.locator('text=The Kitchen')).toContainText("Kitchen")

    //check element is present or not
    await expect(page.locator('text=The Kitchen')).toHaveCount(1);

    if (page.$('text=The Kitchen')) {
        await page.locator('text=The Kitchen').click();
    }
    // await expect.soft(page.locator('text=The Kitchen')).toBeHidden();
    await expect(page.locator('text=The Kitchen')).toBeVisible();
    await expect(page.locator('text=The Kitchen')).toBeEnabled();
    // await expect.soft(page.locator('text=The Kitchen')).toBeDisabled();
    await expect(page.locator('text=The Kitchen')).toHaveText("The Kitchen")
    // await expect.soft(page.locator('text=The Kitchen')).not.toHaveText("The Kitchen")
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', /.*css-dpmy2a/)
    await expect(page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a/)

    await expect(page).toHaveURL("https://kitchen.applitools.com")
    await expect(page).toHaveTitle(/.*Kitchen/)
    // await page.pause();
    //visual validation with screenshot
    await expect(page).toHaveScreenshot()

})