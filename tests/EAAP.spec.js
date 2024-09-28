const { test, expect } = require('@playwright/test')

test('EA App testing', async ({ browser }, testinfo) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://eaapp.somee.com/');
    const currentUrl = page.url();

    await page.locator('#loginLink').click();
    await page.locator('#UserName').fill('admin');
    await page.locator('[type="password"]').fill('password');
    await page.getByLabel('Remember me').click();
    await page.getByRole('button', { name: 'log in' }).click();
    await page.locator('a[href="/Employee"]').click();
    await page.getByRole('link', { name: 'Create New' }).click();
    await page.locator('#Name').fill('Clive');
    
    await page.locator('#Name').press('Tab');
    await page.getByLabel('Salary').fill('1000');
    await page.getByLabel('DurationWorked').fill('5');
    const dropdown = await page.locator('[id="Grade"]');
    dropdown.selectOption('Senior');
    await page.getByLabel('Email').pressSequentially('yo@yopmail.com');
    await page.getByRole('button', {name : 'Create'}).click();
    // await page.pause();
    
    const EmpList = await page.locator('table.table tbody tr');
    const EmpCount = await EmpList.count();
    console.log(EmpCount);

    for(let i = 0; i<EmpCount; i++){

        if(await EmpList.nth(i).locator('td').textContent() === 'Ramesh') 
        {
            console.log('User is present');
            break;
        }
    }

    // Add the URL to the page using JavaScript before taking a screenshot
    await page.evaluate((url) => {
        const urlOverlay = document.createElement('div');
        urlOverlay.style.position = 'fixed';
        urlOverlay.style.top = '0';
        urlOverlay.style.left = '0';
        urlOverlay.style.backgroundColor = 'white';
        urlOverlay.style.padding = '10px';
        urlOverlay.style.zIndex = '10000';
        urlOverlay.innerText = `URL: ${url}`;
        document.body.appendChild(urlOverlay);
    }, currentUrl);


    /*  Below code is written to take SS with name of the test. In this case the name of the test is "EA App Testing"
    await page.screenshot({path: `Screenshot/${testinfo.title}.png`, fullPage: true});
    */
    await page.screenshot({ path: `Screenshot/${testinfo.title}.png`, fullPage: true });

    // await page.pause();

}
)

