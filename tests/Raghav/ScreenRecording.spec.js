const { test, expect } = require('@playwright/test');

test('ScreenRecording', async ({ browser }) => {
  // Create a new context with video recording enabled
  const context = await browser.newContext({
    recordVideo: {
      dir: 'videos/', // Directory to save videos
      size: { width: 1920, height: 1080 } // Optional: specify video size
    }
  });

  const page = await context.newPage();
  await page.goto('https://rahulshettyacademy.com/client/');
  await page.locator('#userEmail').fill('sobo@yopmail.com');
  await page.locator('#userPassword').fill('$Password123');
  await page.locator('#login').click();
  await page.waitForLoadState('networkidle');
  const products = page.locator('.card-body');
  const Titles = await page.locator('.card-body b').allTextContents();
  console.log(Titles);
  const count = await products.count();
  const productWanted = 'ADIDAS ORIGINAL';

  for(let i=0;i<count; i++)
    {
        if (await products.nth(i).locator("b").textContent() === productWanted)
        {
            //add to cart
            await products.nth(i).locator("text= Add To Cart").click();
            break;
        }
    }
  await expect(page.locator("[routerlink*='cart']")).toHaveText(' Cart 1 ');
  await page.locator("[routerlink*='cart']").click();

  // Close the page and save the video
  await page.close();
  await context.close();
});